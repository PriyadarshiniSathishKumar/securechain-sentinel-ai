
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MetricsCard from '@/components/MetricsCard';
import ThreatsList from '@/components/ThreatsList';
import ThreatMap from '@/components/ThreatMap';
import AIAssistant from '@/components/AIAssistant';
import { Shield, Lock, Network, Database } from 'lucide-react';

const mockThreats = [
  {
    id: '1',
    type: 'DDoS Attack',
    source: '203.0.113.42',
    target: 'API Gateway',
    severity: 'high' as const,
    timestamp: '2 min ago',
    status: 'active' as const,
  },
  {
    id: '2',
    type: 'Brute Force',
    source: '198.51.100.24',
    target: 'Auth Server',
    severity: 'medium' as const,
    timestamp: '25 min ago',
    status: 'mitigated' as const,
  },
  {
    id: '3',
    type: 'Smart Contract Exploit',
    source: '0x71C7...F39A',
    target: 'Token Contract',
    severity: 'critical' as const,
    timestamp: '1 hr ago',
    status: 'investigating' as const,
  },
  {
    id: '4',
    type: 'ML Model Poisoning',
    source: 'Training Node',
    target: 'AI Classifier',
    severity: 'high' as const,
    timestamp: '5 hrs ago',
    status: 'mitigated' as const,
  }
];

const Index = () => {
  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader 
          title="Security Dashboard" 
          description="Real-time overview of your security posture"
        />
        
        <main className="p-6 w-full cyber-grid-bg">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <MetricsCard
              title="Security Score"
              value="94%"
              change={{ value: "2%", isPositive: true }}
              icon={<Shield size={20} />}
              variant="success"
            />
            <MetricsCard
              title="Active Threats"
              value="3"
              change={{ value: "5", isPositive: false }}
              icon={<Shield size={20} />}
              variant="alert"
            />
            <MetricsCard
              title="Protected Assets"
              value="128"
              change={{ value: "12", isPositive: true }}
              icon={<Lock size={20} />}
            />
            <MetricsCard
              title="Network Nodes"
              value="42"
              change={{ value: "3", isPositive: true }}
              icon={<Network size={20} />}
            />
          </div>
          
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - Map */}
            <div className="lg:col-span-2 h-[400px]">
              <ThreatMap />
            </div>
            
            {/* Right column - Threats list */}
            <div>
              <ThreatsList threats={mockThreats} />
            </div>
          </div>
          
          {/* Second row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Blockchain Stats */}
            <div className="cyber-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Database size={18} className="text-cyber-blue" />
                  Blockchain Status
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Smart Contracts</span>
                  <span className="text-sm text-white font-medium">24 Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Latest Block</span>
                  <span className="text-sm text-white font-medium">#12,845,932</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Network Status</span>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-cyber-success"></div>
                    <span className="text-sm text-white font-medium">Secure</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Validator Nodes</span>
                  <span className="text-sm text-white font-medium">16 Online</span>
                </div>
              </div>
            </div>
            
            {/* AI Model Status */}
            <div className="cyber-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-blue">
                    <path d="M12 2v2M2 12h2M12 20v2M20 12h2"></path>
                    <rect width="10" height="10" x="7" y="7" rx="1"></rect>
                    <path d="m12 7-1.8-1.8a1 1 0 0 0-1.4 1.4L10.6 8.6M12 7v5.4l3.2 3.2M12 7l-1.8-1.8a1 1 0 0 0-1.4 1.4L10.6 8.6"></path>
                  </svg>
                  AI Model Status
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Models Deployed</span>
                  <span className="text-sm text-white font-medium">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Accuracy Score</span>
                  <span className="text-sm text-white font-medium">96.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Training Status</span>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-cyber-blue animate-pulse"></div>
                    <span className="text-sm text-white font-medium">Active</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Last Updated</span>
                  <span className="text-sm text-white font-medium">Today, 14:32</span>
                </div>
              </div>
            </div>
            
            {/* Network Status */}
            <div className="cyber-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Network size={18} className="text-cyber-blue" />
                  Network Status
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-slate-400">Bandwidth Usage</span>
                    <span className="text-sm text-white">74%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full">
                    <div className="h-full bg-cyber-blue rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-slate-400">Packet Loss</span>
                    <span className="text-sm text-white">0.8%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full">
                    <div className="h-full bg-cyber-success rounded-full" style={{ width: '0.8%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-slate-400">Latency</span>
                    <span className="text-sm text-white">24ms</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full">
                    <div className="h-full bg-cyber-success rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-slate-400">Firewall Blocks</span>
                    <span className="text-sm text-white">4.2K</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full">
                    <div className="h-full bg-cyber-warning rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default Index;
