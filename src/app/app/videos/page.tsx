import Heading from '@/components/ui/Heading';
import VideoList from './_components/VideoList';
import ControlBtn from './_components/ControlBtn';

export default function VideosPage() {
  return (
    <div className="p-4 space-y-4">
      <Heading>Video gần đây</Heading>

      <ControlBtn />

      <VideoList />
    </div>
  );
}
