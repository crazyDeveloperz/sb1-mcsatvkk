import React from 'react';

export default function Withdrawals() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Withdrawals</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Available Balance</h2>
          <div className="text-3xl font-bold">$0.00</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Request Withdrawal</h2>
          <button 
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            disabled
          >
            Request Withdrawal
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Minimum withdrawal amount: $10.00
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold p-6 border-b">Withdrawal History</h2>
        <div className="p-6">
          <div className="text-center text-gray-500 py-8">
            No withdrawal history
          </div>
        </div>
      </div>
    </div>
  );
}