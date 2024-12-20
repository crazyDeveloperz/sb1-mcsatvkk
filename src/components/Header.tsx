import React from 'react';
import { useStore } from '../store/useStore';
import { LogOut, User as UserIcon } from 'lucide-react';

export default function Header() {
  const { user } = useStore();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">CloudStore</h1>
            </div>
          </div>
          
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">{user.full_name}</span>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <UserIcon className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <LogOut className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            ) : (
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}