import AlertList from './_components/AlertList';
import ControlBtn from './_components/ControlBtn';

export default function AlertPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Heading of page */}
      <h1 className="text-xl font-semibold">Danh sách cảnh báo từ camera</h1>

      <ControlBtn />

      <AlertList />
    </div>
  );
}
