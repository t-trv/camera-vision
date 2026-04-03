'use client';

import { Button } from '@/components/ui/Button';
import Search from '@/components/ui/Search';
import { PlusIcon } from 'lucide-react';

export default function ControlButton({
  isAddCamera,
  setIsAddCamera,
}: {
  isAddCamera: boolean;
  setIsAddCamera: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* Left */}
      <div className="flex gap-2">
        <Search placeholder="Tìm kiếm theo tên màn hình" size="sm" className="w-96" />
      </div>

      {/* Right */}
      <div className="flex gap-2">
        <Button
          icon={<PlusIcon size={16} />}
          size="sm"
          onClick={() => setIsAddCamera(!isAddCamera)}
        >
          Thêm màn hình
        </Button>
      </div>
    </div>
  );
}
