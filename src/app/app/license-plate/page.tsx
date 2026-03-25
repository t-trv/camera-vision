import LicensePlateList from './_components/LicensePlateList';
import ControlBtn from './_components/ControlBtn';

export default function LicensePlatePage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Danh sách biển số xe</h1>

      <ControlBtn />

      <LicensePlateList />
    </div>
  );
}
