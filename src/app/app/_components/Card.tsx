import { cn } from '@/utils/cn';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className, title }: CardProps) {
  return (
    <div className={cn('bg-white rounded-xl shadow-sm border border-gray-100 p-5', className)}>
      {title && (
        <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}
