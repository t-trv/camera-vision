import Heading from '@/components/ui/Heading';
import FilterList from './_components/FilterList';
import ControlBtn from './_components/ControlBtn';

export default function Page() {
  return (
    <div className="p-4 space-y-4">
      <Heading>Bộ lọc sự kiện</Heading>

      <ControlBtn />

      <FilterList />
    </div>
  );
}
