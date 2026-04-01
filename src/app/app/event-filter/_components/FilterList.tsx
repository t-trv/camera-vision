'use client';

import Table from '@/components/table/Table';
import { Pencil, Trash, ShieldAlert, Hash, User } from 'lucide-react';

export default function FilterList() {
  const dataMockup = [
    {
      id: 1,
      name: 'Phát hiện người xâm nhập ban đêm',
      eventType: 'Nhận diện người',
      eventIcon: <User size={14} className="text-blue-500" />,
      camera: 'Camera 1, Camera 2',
      status: 'Đang bật',
      notification: 'Email, Push',
    },
    {
      id: 2,
      name: 'Theo dõi biển số xe lạ',
      eventType: 'Nhận diện biển số',
      eventIcon: <Hash size={14} className="text-purple-500" />,
      camera: 'Camera Cổng',
      status: 'Đang bật',
      notification: 'Push',
    },
    {
      id: 3,
      name: 'Cảnh báo vi phạm đỗ xe',
      eventType: 'Vi phạm giao thông',
      eventIcon: <ShieldAlert size={14} className="text-red-500" />,
      camera: 'Camera Bãi đỗ',
      status: 'Đang tắt',
      notification: 'SMS',
    },
  ];

  const columnConfig = [
    {
      key: 'name',
      label: 'Tên bộ lọc',
      width: '25%',
    },
    {
      key: 'eventType',
      label: 'Loại sự kiện',
      width: '20%',
      render: (item: any) => (
        <div className="flex items-center gap-2">
          {item.eventIcon}
          <span>{item.eventType}</span>
        </div>
      ),
    },
    {
      key: 'camera',
      label: 'Camera áp dụng',
      width: '20%',
    },
    {
      key: 'status',
      label: 'Trạng thái',
      width: '10%',
      render: (item: any) => (
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
          item.status === 'Đang bật' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
        }`}>
          {item.status}
        </span>
      ),
    },
    {
      key: 'notification',
      label: 'Thông báo',
      width: '15%',
    },
    {
      key: 'action',
      label: 'Hành động',
      width: '10%',
      render: (item: any) => {
        return (
          <div className="flex items-center gap-2">
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
    <div className="bg-white rounded-lg shadow-sm">
      <Table columns={columnConfig} data={dataMockup} />
    </div>
  );
}
