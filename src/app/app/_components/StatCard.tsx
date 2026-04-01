import React from 'react';
import Card from './Card';
import { cn } from '@/utils/cn';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isUp: boolean;
  };
  colorClassName?: string;
}

export default function StatCard({ label, value, icon, trend, colorClassName }: StatCardProps) {
  return (
    <Card className="flex items-center gap-4">
      <div className={cn('p-3 rounded-lg text-white', colorClassName)}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
          {trend && (
            <span className={cn('text-xs font-semibold', trend.isUp ? 'text-green-500' : 'text-red-500')}>
              {trend.isUp ? '↑' : '↓'} {trend.value}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
