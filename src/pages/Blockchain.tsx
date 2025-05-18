
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Database } from 'lucide-react';

const Blockchain = () => {
  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader 
          title="Blockchain" 
          description="Monitor blockchain transactions and smart contracts"
        />
        
        <main className="p-6 w-full cyber-grid-bg">
          <div className="cyber-card p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              <Database className="h-16 w-16 text-cyber-blue" />
              <h2 className="text-xl font-bold text-white">Blockchain Dashboard</h2>
              <p className="text-slate-400 max-w-md">
                Track blockchain transactions, monitor smart contracts, and manage decentralized applications.
                This dashboard provides insights into your blockchain infrastructure.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blockchain;
