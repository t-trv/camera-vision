import Heading from '@/components/ui/Heading';
import StrangerList from './_components/StrangerList';
import ControlButton from './_components/ControlBtn';

export default function StrangerPage() {
  return (
    <div className="p-4 space-y-4">
      <Heading>Danh sách người lạ được nhận diện</Heading>
      <ControlButton />
      <StrangerList />
    </div>
  );
}
