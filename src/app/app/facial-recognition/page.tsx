'use client';

import Search from '@/components/ui/Search';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import Heading from '@/components/ui/Heading';
import PersonList from './_components/PersonList';

export default function FacialRecognitionPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Heading */}
      <Heading>Định danh khuôn mặt</Heading>

      {/* Control bar */}
      <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
        <div className="flex gap-2">
          <Search
            onChange={() => {}}
            placeholder="Tìm kiếm tên người..."
            size="sm"
            className="w-64"
          />
          <Select
            options={[
              { label: 'Tất cả nhóm', value: 'all' },
              { label: 'Nhân viên', value: 'employee' },
              { label: 'Khách VIP', value: 'vip' },
              { label: 'Danh sách đen', value: 'blacklist' },
            ]}
            value="all"
            onChange={() => {}}
            placeholder="Lọc theo nhóm"
            size="sm"
            className="w-40"
          />
        </div>
        <Button size="sm" className="px-4">
          Thêm người mới
        </Button>
      </div>

      <PersonList />
    </div>
  );
}
