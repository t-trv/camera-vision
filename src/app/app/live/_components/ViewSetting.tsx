import MonitorList from './MonitorList';
import ControlBtn from './ControlBtn';
import { GridMode } from './CameraGrid';
import ViewMode from './ViewMode';

interface ViewSettingProps {
  activeMode: GridMode;
  onModeChange: (mode: GridMode) => void;
}

export default function ViewSetting({ activeMode, onModeChange }: ViewSettingProps) {
  return (
    <div className=" bg-gray-50 min-w-[240px] border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2 bg-primary h-[45px] flex items-center">
        <p className="text-white text-sm font-medium">Cài đặt hiển thị</p>
      </div>

      <div className="p-4 space-y-4">
        <ViewMode activeMode={activeMode} onModeChange={onModeChange} />
        <MonitorList />
      </div>
    </div>
  );
}
