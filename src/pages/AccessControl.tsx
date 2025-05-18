
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Lock } from 'lucide-react';

const AccessControl = () => {
  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader 
          title="Access Control" 
          description="Manage user access and permissions"
        />
        
        <main className="p-6 w-full cyber-grid-bg">
          <div className="cyber-card p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              <Lock className="h-16 w-16 text-cyber-blue" />
              <h2 className="text-xl font-bold text-white">Access Control Dashboard</h2>
              <p className="text-slate-400 max-w-md">
                Manage user roles, permissions, and authentication methods.
                This dashboard provides tools for implementing least privilege access control.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccessControl;
