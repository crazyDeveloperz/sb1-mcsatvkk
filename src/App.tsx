import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import Files from './pages/Files';
import Videos from './pages/Videos';
import Withdrawals from './pages/Withdrawals';
import Settings from './pages/Settings';
import AdminUsers from './pages/admin/Users';
import AdminAnalytics from './pages/admin/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="files" element={<Files />} />
          <Route path="videos" element={<Videos />} />
          <Route path="withdrawals" element={<Withdrawals />} />
          <Route path="settings" element={<Settings />} />
          <Route path="admin/users" element={<AdminUsers />} />
          <Route path="admin/analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;