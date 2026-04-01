import React from 'react';
import { Cpu, HardDrive, Video, LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface StatusRowProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  percentage: number;
}

const StatusRow = ({ icon: Icon, label, value, percentage }: StatusRowProps) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center text-white text-xs">
      <div className="flex items-center gap-2">
        <Icon size={14} className="opacity-80" />
        <span>{label} : <span className="font-semibold">{value}</span></span>
      </div>
      <span className="font-semibold">{percentage.toFixed(1)}%</span>
    </div>
    <div className="h-1.5 w-full bg-blue-900/50 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-400 rounded-full" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default function ServerStatusCard() {
  return (
    <div className="bg-linear-to-br from-blue-900 to-blue-700 rounded-xl p-5 shadow-lg space-y-4 min-w-[320px]">
      <StatusRow 
        icon={Cpu} 
        label="4 CPUs : Linux" 
        value="" 
        percentage={10.0} 
      />
      
      <StatusRow 
        icon={Cpu} // Using Cpu as a placeholder for RAM chip icon
        label="3514.00 MB RAM" 
        value="" 
        percentage={72.0} 
      />

      <StatusRow 
        icon={HardDrive} 
        label="Chính (Primary)" 
        value="0.00 MB" 
        percentage={0.0} 
      />

      <StatusRow 
        icon={HardDrive} 
        label="Second" 
        value="0.00 MB" 
        percentage={0.0} 
      />

      <div className="pt-2 border-t border-white/10">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Video size={16} className="opacity-80" />
            <span className="text-sm font-medium">Màn hình đang hoạt động</span>
          </div>
          <span className="text-sm font-bold">0 / 4</span>
        </div>
        <div className="h-1.5 w-full bg-blue-900/50 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-blue-400 rounded-full" style={{ width: '0%' }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px] text-blue-200/80 pt-2 border-t border-white/10 uppercase tracking-wider">
        <div>Truyền: <span className="text-white font-mono">0.00 Kb/s</span></div>
        <div>Nhận: <span className="text-white font-mono">0.00 Kb/s</span></div>
        <div>Đọc: <span className="text-white font-mono">0.00 Kb/s</span></div>
        <div>Ghi: <span className="text-white font-mono">0.00 Kb/s</span></div>
      </div>
    </div>
  );
}
