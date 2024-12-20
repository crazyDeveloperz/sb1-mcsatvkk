import React from 'react';
import { useStore } from '../store/useStore';

export default function Dashboard() {
  const { user } = useStore();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {user && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Storage Usage</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Used</span>
                <span>{(user.storage_used / 1024 / 1024).toFixed(2)} MB</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>{(user.storage_limit / 1024 / 1024 / 1024).toFixed(2)} GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(user.storage_used / user.storage_limit) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Files</span>
                <span>-</span>
              </div>
              <div className="flex justify-between">
                <span>Video Views</span>
                <span>-</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="text-gray-500 text-sm">
              No recent activity
            </div>
          </div>
        </div>
      )}
    </div>
  );
}