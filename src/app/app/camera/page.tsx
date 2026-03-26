import Heading from '@/components/ui/Heading';
import CameraList from './_components/CameraList';
import ControlButton from './_components/ControlButton';

export default function CameraPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Heading of page */}
      <Heading>Quản lý camera</Heading>

      {/* Control button */}
      <div>
        <ControlButton />
      </div>

      {/* List of cameras */}
      <CameraList />
    </div>
  );
}
