import React from 'react';
import Card from './Card';

interface MockupChartProps {
  title: string;
  data: number[];
  color: string;
}

export default function MockupChart({ title, data, color }: MockupChartProps) {
  const max = Math.max(...data);
  const height = 100;
  const width = 300;
  const step = width / (data.length - 1);

  const points = data.map((val, i) => {
    const x = i * step;
    const y = height - (val / max) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <Card title={title}>
      <div className="h-24 w-full mt-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            fill={`url(#gradient-${color})`}
            points={`${points} ${width},${height} 0,${height}`}
          />
        </svg>
      </div>
      <div className="flex justify-between items-center mt-4 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>23:59</span>
      </div>
    </Card>
  );
}
