/*
  # Initial Schema Setup for Cloud Storage Platform

  1. Tables
    - users: Store user information and storage limits
    - files: Store file metadata
    - video_views: Track video view counts
    - withdrawal_requests: Handle user withdrawal requests
    
  2. Security
    - Enable RLS on all tables
    - Add policies for user access control
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  storage_used bigint DEFAULT 0,
  storage_limit bigint DEFAULT 1073741824, -- 1GB default
  created_at timestamptz DEFAULT now(),
  is_admin boolean DEFAULT false,
  
  CONSTRAINT storage_used_nonnegative CHECK (storage_used >= 0),
  CONSTRAINT storage_limit_positive CHECK (storage_limit > 0)
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admin can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true
  ));

-- Files table
CREATE TABLE files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  size bigint NOT NULL,
  type text NOT NULL,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  path text NOT NULL,
  view_count bigint DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  CONSTRAINT size_positive CHECK (size > 0)
);

ALTER TABLE files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own files"
  ON files
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admin can read all files"
  ON files
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true
  ));

-- Video views tracking
CREATE TABLE video_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_id uuid REFERENCES files(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  viewed_at timestamptz DEFAULT now(),
  duration_watched int NOT NULL,
  
  CONSTRAINT duration_positive CHECK (duration_watched >= 0)
);

ALTER TABLE video_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own video stats"
  ON video_views
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM files WHERE files.id = file_id AND files.user_id = auth.uid()
    )
  );

-- Withdrawal requests
CREATE TABLE withdrawal_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  amount decimal NOT NULL,
  status text DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  CONSTRAINT amount_positive CHECK (amount > 0)
);

ALTER TABLE withdrawal_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own withdrawal requests"
  ON withdrawal_requests
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admin can manage all withdrawal requests"
  ON withdrawal_requests
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true
  ));