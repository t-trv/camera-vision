'use client';

import Table from '@/components/table/Table';
import { Eye, Pencil, Trash } from 'lucide-react';
import Image from 'next/image';

export default function FaceList() {
  const dataMockup = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      name: 'Nguyễn Văn A',
      age: 30,
      gender: 'Nam',
      camera: 'Camera 1',
      time: '2024-03-31 23:15:00',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      name: 'Trần Thị B',
      age: 25,
      gender: 'Nữ',
      camera: 'Camera 2',
      time: '2024-03-31 23:16:00',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      name: 'Phạm Văn C',
      age: 40,
      gender: 'Nam',
      camera: 'Camera 1',
      time: '2024-03-31 23:17:20',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      name: 'Lê Thị D',
      age: 28,
      gender: 'Nữ',
      camera: 'Camera 3',
      time: '2024-03-31 23:18:45',
    },
  ];

  const columnConfig = [
    {
      key: 'image',
      label: 'Ảnh',
      width: '10%',
      render: (item: any) => (
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200">
          <img src={item.image} alt="Face" className="object-cover" />
        </div>
      ),
    },
    {
      key: 'name',
      label: 'Họ tên',
      width: '20%',
    },
    {
      key: 'age',
      label: 'Tuổi',
      width: '10%',
    },
    {
      key: 'gender',
      label: 'Giới tính',
      width: '10%',
    },
    {
      key: 'camera',
      label: 'Camera',
      width: '15%',
    },
    {
      key: 'time',
      label: 'Thời gian',
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
    <div className="bg-white rounded-lg shadow-sm">
      <Table columns={columnConfig} data={dataMockup} />
    </div>
  );
}
