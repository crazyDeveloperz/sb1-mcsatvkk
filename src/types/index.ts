export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  storage_used: number;
  storage_limit: number;
  created_at: string;
  is_admin: boolean;
}

export interface File {
  id: string;
  name: string;
  size: number;
  type: string;
  user_id: string;
  path: string;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface WithdrawalRequest {
  id: string;
  user_id: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}