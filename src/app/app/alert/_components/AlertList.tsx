'use client';

import Table from '@/components/table/Table';
import { Eye, Pencil, Trash } from 'lucide-react';

export default function AlertList() {
  const dataMockup = [
    {
      event: 'Cảnh báo phát hiện người',
      camera: 'Camera 1',
      time: '2022-01-01 12:00:00',
      status: 'active',
    },
    {
      event: 'Phát hiện người lạ',
      camera: 'Camera 2',
      time: '2022-01-01 12:00:00',
      status: 'inactive',
    },

    {
      event: 'Biển số xe',
      camera: 'Camera 2',
      time: '2022-01-01 12:00:00',
      status: 'inactive',
    },

    {
      event: 'Phát hiện vi phạm giao thông',
      camera: 'Camera 2',
      time: '2022-01-01 12:00:00',
      status: 'inactive',
    },
  ];

  const columnConfig = [
    {
      key: 'event',
      label: 'Sự kiện',
      width: '30%',
    },
    {
      key: 'camera',
      label: 'Camera',
      width: '20%',
    },
    {
      key: 'time',
      label: 'Thời gian',
      width: '20%',
    },
    {
      key: 'status',
      label: 'Trạng thái',
      width: '10%',
    },
    {
      key: 'action',
      label: 'Hành động',
      width: '10%',
      render: (value: any) => {
        return (
          <div className="flex items-center gap-2">
            <button className="cursor-pointer">
              <Eye className="text-gray-500 hover:text-primary" size={16} />
            </button>
            <button className="cursor-pointer">
              <Pencil className="text-gray-500 hover:text-primary" size={16} />
            </button>
            <button className="cursor-pointer">
              <Trash className="text-gray-500 hover:text-red-500" size={16} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table columns={columnConfig} data={dataMockup} />
    </div>
  );
}
