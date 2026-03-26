import Heading from '@/components/ui/Heading';
import AlertList from './_components/AlertList';
import ControlBtn from './_components/ControlBtn';

export default function AlertPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Heading of page */}
      <Heading>Danh sách cảnh báo từ camera</Heading>

      <ControlBtn />

      <AlertList />
    </div>
  );
}
