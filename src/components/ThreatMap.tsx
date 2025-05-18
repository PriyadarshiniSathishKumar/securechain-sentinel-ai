
import React, { useEffect, useRef } from 'react';
import { Network } from 'lucide-react';

const ThreatMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    // Initial sizing
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    const nodes = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 2,
      color: i < 18 ? '#3B82F6' : '#DC2626',
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      connections: [] as number[]
    }));

    // Create connections between nodes
    nodes.forEach((node, i) => {
      const connectionsCount = Math.floor(Math.random() * 3) + 1;
      for (let c = 0; c < connectionsCount; c++) {
        const targetIdx = Math.floor(Math.random() * nodes.length);
        if (targetIdx !== i && !node.connections.includes(targetIdx)) {
          node.connections.push(targetIdx);
        }
      }
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIdx => {
          const target = nodes[targetIdx];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          
          // Red connections for threat nodes
          if (node.color === '#DC2626' || target.color === '#DC2626') {
            ctx.strokeStyle = 'rgba(220, 38, 38, 0.3)';
          } else {
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
          }
          
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });
      
      // Draw and update nodes
      nodes.forEach(node => {
        // Draw glow for nodes
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        
        if (node.color === '#DC2626') {
          glow.addColorStop(0, 'rgba(220, 38, 38, 0.5)');
          glow.addColorStop(1, 'rgba(220, 38, 38, 0)');
        } else {
          glow.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
          glow.addColorStop(1, 'rgba(59, 130, 246, 0)');
        }
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
        
        // Draw the actual node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Update position with a small random movement
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="cyber-card h-full overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Network size={18} className="text-cyber-blue" />
          Network Security Map
        </h2>
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-cyber-blue"></div>
            <span className="text-xs text-slate-400">Secure</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-cyber-alert"></div>
            <span className="text-xs text-slate-400">Threat</span>
          </div>
        </div>
      </div>
      <div className="relative h-[calc(100%-40px)]">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ThreatMap;
