
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Cloud } from 'lucide-react';

const CloudSecurity = () => {
  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader 
          title="Cloud Security" 
          description="Monitor and manage cloud infrastructure security"
        />
        
        <main className="p-6 w-full cyber-grid-bg">
          <div className="cyber-card p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              <Cloud className="h-16 w-16 text-cyber-blue" />
              <h2 className="text-xl font-bold text-white">Cloud Security Dashboard</h2>
              <p className="text-slate-400 max-w-md">
                Secure cloud resources, monitor access, and detect vulnerabilities.
                This dashboard provides visibility into your cloud security posture.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CloudSecurity;
