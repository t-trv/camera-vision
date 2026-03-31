import Heading from '@/components/ui/Heading';
import FaceList from './_components/FaceList';
import ControlBtn from './_components/ControlBtn';

export default function HumanFacePage() {
  return (
    <div className="p-4 space-y-4">
      <Heading>Nhận diện khuôn mặt</Heading>

      <ControlBtn />

      <FaceList />
    </div>
  );
}
