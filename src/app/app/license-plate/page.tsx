import Heading from '@/components/ui/Heading';
import LicensePlateList from './_components/LicensePlateList';
import ControlBtn from './_components/ControlBtn';

export default function LicensePlatePage() {
  return (
    <div className="p-4 space-y-4">
      <Heading>Danh sách biển số xe</Heading>

      <ControlBtn />

      <LicensePlateList />
    </div>
  );
}
