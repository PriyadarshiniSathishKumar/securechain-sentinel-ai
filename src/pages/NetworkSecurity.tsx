
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Shield } from 'lucide-react';

const NetworkSecurity = () => {
  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader 
          title="Network Security" 
          description="Monitor and manage network security threats"
        />
        
        <main className="p-6 w-full cyber-grid-bg">
          <div className="cyber-card p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              <Shield className="h-16 w-16 text-cyber-blue" />
              <h2 className="text-xl font-bold text-white">Network Security Dashboard</h2>
              <p className="text-slate-400 max-w-md">
                Monitor network traffic, detect anomalies, and respond to threats in real-time.
                This dashboard provides comprehensive visibility into your network security posture.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NetworkSecurity;
