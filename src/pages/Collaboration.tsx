
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Users } from 'lucide-react';

const Collaboration = () => {
  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader 
          title="Collaboration" 
          description="Collaborate with team members and partners"
        />
        
        <main className="p-6 w-full cyber-grid-bg">
          <div className="cyber-card p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              <Users className="h-16 w-16 text-cyber-blue" />
              <h2 className="text-xl font-bold text-white">Collaboration Dashboard</h2>
              <p className="text-slate-400 max-w-md">
                Communicate with team members, share insights, and collaborate on security incidents.
                This dashboard facilitates secure collaboration across your organization.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collaboration;
