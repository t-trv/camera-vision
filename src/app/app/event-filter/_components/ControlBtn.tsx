'use client';

import { Button } from '@/components/ui/Button';
import Search from '@/components/ui/Search';
import { Plus } from 'lucide-react';

export default function ControlButton() {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* Left */}
      <div className="flex gap-2">
        <Search placeholder="Tìm kiếm bộ lọc" size="sm" />
      </div>

      {/* Right */}
      <div className="flex gap-2">
        <Button icon={<Plus size={16} />} size="sm">
          Thêm bộ lọc mới
        </Button>
      </div>
    </div>
  );
}
