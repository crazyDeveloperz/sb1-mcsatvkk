import React from 'react';

export default function AdminAnalytics() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500">Total Users</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500">Total Storage Used</h2>
          <p className="text-3xl font-bold">0 GB</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm font-medium text-gray-500">Total Video Views</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold p-6 border-b">Recent Activity</h2>
          <div className="p-6">
            <div className="text-center text-gray-500 py-8">
              No recent activity
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold p-6 border-b">Pending Withdrawals</h2>
          <div className="p-6">
            <div className="text-center text-gray-500 py-8">
              No pending withdrawals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}