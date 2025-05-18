
import React, { useState } from 'react';
import { Shield, Database, Network, Terminal, User, Users, Cloud, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  alert?: number;
  onClick: () => void;
}

const SidebarItem = ({ icon: Icon, label, active = false, alert, onClick }: SidebarItemProps) => (
  <li>
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200",
        active 
          ? "bg-cyber-blue text-white" 
          : "text-slate-300 hover:bg-slate-800/60"
      )}
    >
      <Icon size={18} />
      <span className="text-sm font-medium">{label}</span>
      {alert && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-cyber-alert text-xs text-white">
          {alert}
        </span>
      )}
    </button>
  </li>
);

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside 
      className={cn(
        "h-screen bg-slate-900 transition-all duration-300 flex flex-col border-r border-slate-800",
        isCollapsed ? "w-[60px]" : "w-64"
      )}
    >
      {/* Logo area */}
      <div className="py-4 px-3 flex items-center justify-between border-b border-slate-800">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-cyber-blue" />
            <span className="font-bold text-white">SecureChainAI</span>
          </div>
        )}
        {isCollapsed && <Shield className="h-6 w-6 text-cyber-blue mx-auto" />}
        <button 
          onClick={toggleSidebar}
          className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800"
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {!isCollapsed ? (
          <ul className="space-y-1">
            <SidebarItem 
              icon={Shield} 
              label="Dashboard" 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')} 
            />
            <SidebarItem 
              icon={Network} 
              label="Network Security" 
              active={activeTab === 'network'} 
              alert={3}
              onClick={() => setActiveTab('network')} 
            />
            <SidebarItem 
              icon={Database} 
              label="Blockchain" 
              active={activeTab === 'blockchain'} 
              onClick={() => setActiveTab('blockchain')} 
            />
            <SidebarItem 
              icon={Terminal} 
              label="AI Models" 
              active={activeTab === 'aimodels'} 
              onClick={() => setActiveTab('aimodels')} 
            />
            <SidebarItem 
              icon={Cloud} 
              label="Cloud Security" 
              active={activeTab === 'cloud'} 
              onClick={() => setActiveTab('cloud')} 
            />
            <SidebarItem 
              icon={Users} 
              label="Collaboration" 
              active={activeTab === 'collaboration'} 
              onClick={() => setActiveTab('collaboration')} 
            />
            <SidebarItem 
              icon={Lock} 
              label="Access Control" 
              active={activeTab === 'access'} 
              onClick={() => setActiveTab('access')} 
            />
          </ul>
        ) : (
          <ul className="flex flex-col items-center space-y-5 pt-5">
            <button onClick={() => setActiveTab('dashboard')} className={cn("p-2 rounded-md", activeTab === 'dashboard' ? "bg-cyber-blue text-white" : "text-slate-400")}>
              <Shield size={20} />
            </button>
            <button onClick={() => setActiveTab('network')} className={cn("p-2 rounded-md relative", activeTab === 'network' ? "bg-cyber-blue text-white" : "text-slate-400")}>
              <Network size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-cyber-alert"></span>
            </button>
            <button onClick={() => setActiveTab('blockchain')} className={cn("p-2 rounded-md", activeTab === 'blockchain' ? "bg-cyber-blue text-white" : "text-slate-400")}>
              <Database size={20} />
            </button>
            <button onClick={() => setActiveTab('aimodels')} className={cn("p-2 rounded-md", activeTab === 'aimodels' ? "bg-cyber-blue text-white" : "text-slate-400")}>
              <Terminal size={20} />
            </button>
            <button onClick={() => setActiveTab('cloud')} className={cn("p-2 rounded-md", activeTab === 'cloud' ? "bg-cyber-blue text-white" : "text-slate-400")}>
              <Cloud size={20} />
            </button>
            <button onClick={() => setActiveTab('collaboration')} className={cn("p-2 rounded-md", activeTab === 'collaboration' ? "bg-cyber-blue text-white" : "text-slate-400")}>
              <Users size={20} />
            </button>
            <button onClick={() => setActiveTab('access')} className={cn("p-2 rounded-md", activeTab === 'access' ? "bg-cyber-blue text-white" : "text-slate-400")}>
              <Lock size={20} />
            </button>
          </ul>
        )}
      </nav>

      {/* User area */}
      <div className={cn(
        "border-t border-slate-800 p-3 flex items-center", 
        isCollapsed ? "justify-center" : "justify-between"
      )}>
        {!isCollapsed ? (
          <>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-cyber-blue flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-slate-400">Security Analyst</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </>
        ) : (
          <div className="h-8 w-8 rounded-full bg-cyber-blue flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
