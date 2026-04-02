import CameraGrid from './_components/CameraGrid';

import { HEADER_HEIGHT } from '@/config/ui';

export default function MonitorPage() {
  return (
    <div className={`p-4 max-w-[1350px]`}>
      <CameraGrid />
    </div>
  );
}
