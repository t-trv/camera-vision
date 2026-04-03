'use client';

import { useState } from 'react';
import CameraGrid, { GridMode } from './_components/CameraGrid';
import ViewSetting from './_components/ViewSetting';

export default function LivePage() {
  const [activeMode, setActiveMode] = useState<GridMode>('3x3');

  return (
    <div className={`p-4 flex gap-4`}>
      <CameraGrid activeMode={activeMode} />
      <ViewSetting activeMode={activeMode} onModeChange={setActiveMode} />
    </div>
  );
}
