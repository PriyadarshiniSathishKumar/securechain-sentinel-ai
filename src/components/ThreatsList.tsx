
import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

interface Threat {
  id: string;
  type: string;
  source: string;
  target: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  status: 'active' | 'mitigated' | 'investigating';
}

interface ThreatsListProps {
  threats: Threat[];
  title?: string;
}

const ThreatsList = ({ threats, title = "Recent Threats" }: ThreatsListProps) => {
  const getSeverityColor = (severity: Threat['severity']) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getStatusBadge = (status: Threat['status']) => {
    switch (status) {
      case 'active': 
        return <span className="px-2 py-1 text-xs rounded-full bg-cyber-alert/20 text-cyber-alert">Active</span>;
      case 'mitigated': 
        return <span className="px-2 py-1 text-xs rounded-full bg-cyber-success/20 text-cyber-success">Mitigated</span>;
      case 'investigating': 
        return <span className="px-2 py-1 text-xs rounded-full bg-cyber-warning/20 text-cyber-warning">Investigating</span>;
      default: 
        return null;
    }
  };

  return (
    <div className="cyber-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Shield size={18} className="text-cyber-blue" />
          {title}
        </h2>
        <button className="text-xs text-cyber-blue hover:underline">
          View All
        </button>
      </div>
      
      {threats.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-slate-400">
          <AlertTriangle size={24} className="mb-2" />
          <p>No threats detected</p>
        </div>
      ) : (
        <div className="space-y-3">
          {threats.map((threat) => (
            <div key={threat.id} className="flex items-center justify-between p-3 rounded-md bg-slate-800/60 border border-slate-700/30">
              <div className="flex items-center gap-3">
                <div className={`${getSeverityColor(threat.severity)} h-2 w-2 rounded-full`}></div>
                <div>
                  <p className="text-sm font-medium text-white">{threat.type}</p>
                  <p className="text-xs text-slate-400">
                    {threat.source} → {threat.target}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {getStatusBadge(threat.status)}
                <p className="text-xs text-slate-400">{threat.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreatsList;
