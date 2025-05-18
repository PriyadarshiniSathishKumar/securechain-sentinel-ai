
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Terminal } from 'lucide-react';

const AIModels = () => {
  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader 
          title="AI Models" 
          description="Manage and monitor AI/ML models"
        />
        
        <main className="p-6 w-full cyber-grid-bg">
          <div className="cyber-card p-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              <Terminal className="h-16 w-16 text-cyber-blue" />
              <h2 className="text-xl font-bold text-white">AI Models Dashboard</h2>
              <p className="text-slate-400 max-w-md">
                Deploy, monitor, and optimize AI and machine learning models.
                This dashboard provides tools for model management and performance tracking.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AIModels;
