'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/utils/cn';
import { GRID_MODES, GridMode } from './CameraGrid';

interface ViewModeProps {
  activeMode: GridMode;
  onModeChange: (mode: GridMode) => void;
}

export default function ViewMode({ activeMode, onModeChange }: ViewModeProps) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div>
      <p
        className="flex items-center gap-2 cursor-pointer transition-all duration-300 font-semibold text-sm text-gray-700"
        onClick={() => setIsExpand(!isExpand)}
      >
        Chế độ xem{' '}
        {!isExpand ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </p>

      {isExpand && (
        <div className="space-y-1.5 mt-4">
          {GRID_MODES.map(({ mode, label }, index) => (
            <motion.label
              key={mode}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'group relative flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer select-none',
                activeMode === mode
                  ? 'bg-primary/5 border-primary shadow-sm'
                  : 'bg-white border-transparent hover:bg-gray-100',
              )}
            >
              <div className="shrink-0 relative flex items-center justify-center">
                <input
                  type="radio"
                  name="view-mode"
                  value={mode}
                  checked={activeMode === mode}
                  onChange={() => onModeChange(mode)}
                  className="sr-only"
                />
                {/* Outer circle */}
                <div
                  className={cn(
                    'w-4 h-4 rounded-full border-2 transition-all duration-200 flex items-center justify-center',
                    activeMode === mode ? 'border-primary bg-primary' : 'border-gray-300 bg-white',
                  )}
                >
                  {/* Inner dot */}
                  <div
                    className={cn(
                      'w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-200',
                      activeMode === mode ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span
                  className={cn(
                    'text-xs font-medium transition-colors duration-200',
                    activeMode === mode
                      ? 'text-primary'
                      : 'text-gray-600 group-hover:text-gray-900',
                  )}
                >
                  {label}
                </span>
              </div>

              {/* Check icon for active state */}
              {activeMode === mode && (
                <div className="ml-auto">
                  <svg
                    className="w-3.5 h-3.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </motion.label>
          ))}
        </div>
      )}
    </div>
  );
}
