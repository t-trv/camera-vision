import CameraList from './_components/CameraList';
import ControlButton from './_components/ControlButton';

export default function CameraPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Heading of page */}
      <h1 className="text-xl font-semibold">Quản lý camera</h1>

      {/* Control button */}
      <div>
        <ControlButton />
      </div>

      {/* List of cameras */}
      <CameraList />
    </div>
  );
}
