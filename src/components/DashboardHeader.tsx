
import React from 'react';
import { Bell, Search, Shield } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  description?: string;
}

const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-6 border-b border-slate-800">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          {title}
        </h1>
        {description && (
          <p className="text-slate-400 text-sm mt-1">{description}</p>
        )}
      </div>
      
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-slate-800 text-white rounded-md w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-cyber-blue"
          />
        </div>
        
        {/* Notifications */}
        <button className="relative p-2 bg-slate-800 rounded-md hover:bg-slate-700">
          <Bell className="h-5 w-5 text-slate-400" />
          <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-cyber-alert text-[10px] text-white">
            3
          </span>
        </button>
        
        {/* Security Status Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full">
          <div className="h-2 w-2 rounded-full bg-cyber-success animate-pulse"></div>
          <span className="text-xs text-slate-300">System Secure</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
