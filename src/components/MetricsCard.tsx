
import React from 'react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    isPositive?: boolean;
  };
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'alert';
}

const MetricsCard = ({ 
  title, 
  value, 
  change, 
  icon,
  variant = 'default' 
}: MetricsCardProps) => {
  const bgColorClass = {
    default: 'bg-slate-800/50',
    success: 'bg-cyber-success/10',
    warning: 'bg-cyber-warning/10',
    alert: 'bg-cyber-alert/10',
  }[variant];

  const borderColorClass = {
    default: 'border-slate-700/50',
    success: 'border-cyber-success/30',
    warning: 'border-cyber-warning/30',
    alert: 'border-cyber-alert/30',
  }[variant];

  const iconColorClass = {
    default: 'text-cyber-blue',
    success: 'text-cyber-success',
    warning: 'text-cyber-warning',
    alert: 'text-cyber-alert',
  }[variant];

  return (
    <div className={cn(
      "cyber-card flex flex-col",
      bgColorClass,
      borderColorClass,
      "transition-all duration-200 hover:translate-y-[-2px]"
    )}>
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium text-slate-400">{title}</p>
        {icon && (
          <div className={cn("p-2 rounded-md", iconColorClass)}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        {change && (
          <div className={cn(
            "text-xs font-medium px-2 py-0.5 rounded", 
            change.isPositive ? "bg-cyber-success/20 text-cyber-success" : "bg-cyber-alert/20 text-cyber-alert"
          )}>
            {change.isPositive ? '+' : ''}{change.value}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricsCard;
