'use client';

import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

// ============================================================================
// TYPES
// ============================================================================

export type GridMode = '2x2' | '3x3' | '4x4' | '5x5';

export interface Camera {
  id: number;
  label: string;
  port: number;
}

// ============================================================================
// CONSTANTS
// ============================================================================

export const GRID_MODES: { mode: GridMode; label: string; cols: number; count: number }[] = [
  { mode: '2x2', label: '2x2 (4 cams)', cols: 2, count: 4 },
  { mode: '3x3', label: '3x3 (9 cams)', cols: 3, count: 9 },
  { mode: '4x4', label: '4x4 (16 cams)', cols: 4, count: 16 },
  { mode: '5x5', label: '5x5 (25 cams)', cols: 5, count: 25 },
];

const CAMERAS: Camera[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  label: `CAM ${i + 1}`,
  port: 9901 + i,
}));

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function CameraCell({ camera }: { camera: Camera }) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:${camera.port}`);

    ws.onmessage = (event) => {
      setImageSrc(URL.createObjectURL(event.data));
    };

    return () => ws.close();
  }, [camera.port]);

  return (
    <div className="relative flex flex-col bg-white border border-[#a2a2a2] overflow-hidden aspect-video">
      {/* Camera label */}
      <div className="absolute top-2 left-2 z-10 text-xs text-white/70 font-medium select-none">
        {camera.label} - Port {camera.port}
      </div>

      {/* Stream placeholder */}
      <div className="flex-1 flex items-center justify-center text-[#444] text-sm">
        {/* Replace <img> with actual stream source when available */}
        {/* <svg
          className="w-8 h-8 opacity-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M4 8h8a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"
          />
        </svg> */}
        <img src={imageSrc} alt={camera.label} />
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function CameraGrid({ activeMode }: { activeMode: GridMode }) {
  const currentConfig = GRID_MODES.find((g) => g.mode === activeMode)!;
  const visibleCameras = CAMERAS.slice(0, currentConfig.count);

  const gridColsClass: Record<GridMode, string> = {
    '2x2': 'grid-cols-2',
    '3x3': 'grid-cols-3',
    '4x4': 'grid-cols-4',
    '5x5': 'grid-cols-5',
  };

  return (
    <div className="flex flex-col w-full bg-[#111] text-white">
      {/* Camera grid */}
      <div className={cn('grid flex-1 gap-px bg-[#2a2a2a]', gridColsClass[activeMode])}>
        {visibleCameras.map((camera) => (
          <CameraCell key={camera.id} camera={camera} />
        ))}
      </div>
    </div>
  );
}
