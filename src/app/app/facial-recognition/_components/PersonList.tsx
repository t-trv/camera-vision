'use client';

import Table from '@/components/table/Table';
import { Pencil, Trash, History } from 'lucide-react';

export default function PersonList() {
  const dataMockup = [
    {
      id: 1,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      name: 'Nguyễn Văn A',
      gender: 'Nam',
      group: 'Nhân viên',
      groupColor: 'bg-blue-100 text-blue-700',
      lastSeen: '2024-04-01 08:30:00',
    },
    {
      id: 2,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      name: 'Trần Thị B',
      gender: 'Nữ',
      group: 'Khách VIP',
      groupColor: 'bg-purple-100 text-purple-700',
      lastSeen: '2024-04-01 09:15:00',
    },
    {
      id: 3,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      name: 'Phạm Văn C',
      gender: 'Nam',
      group: 'Danh sách đen',
      groupColor: 'bg-red-100 text-red-700',
      lastSeen: '2024-03-31 18:20:00',
    },
    {
      id: 4,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      name: 'Lê Thị D',
      gender: 'Nữ',
      group: 'Nhân viên',
      groupColor: 'bg-blue-100 text-blue-700',
      lastSeen: '2024-04-01 07:45:00',
    },
  ];

  const columnConfig = [
    {
      key: 'photo',
      label: 'Ảnh',
      width: '10%',
      render: (item: any) => (
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200">
          <img
            src={item.photo}
            alt="Person"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      key: 'name',
      label: 'Họ tên',
      width: '25%',
    },
    {
      key: 'gender',
      label: 'Giới tính',
      width: '10%',
    },
    {
      key: 'group',
      label: 'Nhóm',
      width: '15%',
      render: (item: any) => (
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.groupColor}`}>
          {item.group}
        </span>
      ),
    },
    {
      key: 'lastSeen',
      label: 'Lần cuối xuất hiện',
      width: '20%',
    },
    {
      key: 'action',
      label: 'Hành động',
      width: '15%',
      render: (item: any) => {
        return (
          <div className="flex items-center gap-2">
            <button className="cursor-pointer" title="Lịch sử">
              <History className="text-gray-500 hover:text-primary" size={16} />
            </button>
            <button className="cursor-pointer" title="Sửa">
              <Pencil className="text-gray-500 hover:text-primary" size={16} />
            </button>
            <button className="cursor-pointer" title="Xóa">
              <Trash className="text-gray-500 hover:text-red-500" size={16} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm mt-4">
      <Table columns={columnConfig} data={dataMockup} />
    </div>
  );
}
