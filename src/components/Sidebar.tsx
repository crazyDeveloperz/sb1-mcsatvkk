import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  Files,
  Video,
  CreditCard,
  Settings,
  Users,
  BarChart
} from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Sidebar() {
  const location = useLocation();
  const { user } = useStore();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Files', href: '/files', icon: Files },
    { name: 'Videos', href: '/videos', icon: Video },
    { name: 'Withdrawals', href: '/withdrawals', icon: CreditCard },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const adminNavigation = [
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${location.pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <Icon
                  className={`
                    mr-3 h-5 w-5
                    ${location.pathname === item.href
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500'}
                  `}
                />
                {item.name}
              </Link>
            );
          })}
        </div>

        {user?.is_admin && (
          <>
            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Admin
              </h3>
              <div className="mt-1 space-y-1">
                {adminNavigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        group flex items-center px-2 py-2 text-sm font-medium rounded-md
                        ${location.pathname === item.href
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                    >
                      <Icon
                        className={`
                          mr-3 h-5 w-5
                          ${location.pathname === item.href
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500'}
                        `}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}