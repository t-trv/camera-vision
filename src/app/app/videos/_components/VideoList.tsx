'use client';

import Table from '@/components/table/Table';
import { Eye, Download, Trash } from 'lucide-react';

export default function VideoList() {
  const dataMockup = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=160&h=90&fit=crop',
      name: 'Video_20240331_120000.mp4',
      camera: 'Camera 1',
      duration: '00:30',
      time: '2024-03-31 12:00:00',
      size: '15.5 MB',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=160&h=90&fit=crop',
      name: 'Video_20240331_120500.mp4',
      camera: 'Camera 2',
      duration: '01:00',
      time: '2024-03-31 12:05:00',
      size: '30.2 MB',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=160&h=90&fit=crop',
      name: 'Video_20240331_121000.mp4',
      camera: 'Camera 1',
      duration: '00:45',
      time: '2024-03-31 12:10:00',
      size: '22.1 MB',
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=160&h=90&fit=crop',
      name: 'Video_20240331_121500.mp4',
      camera: 'Camera 3',
      duration: '00:20',
      time: '2024-03-31 12:15:00',
      size: '10.8 MB',
    },
  ];

  const columnConfig = [
    {
      key: 'thumbnail',
      label: 'Thumbnail',
      width: '15%',
      render: (item: any) => (
        <div className="relative w-24 h-14 overflow-hidden rounded border border-gray-200 bg-gray-100">
          <img
            src={item.thumbnail}
            alt="Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      key: 'name',
      label: 'Tên video',
      width: '25%',
    },
    {
      key: 'camera',
      label: 'Camera',
      width: '15%',
    },
    {
      key: 'duration',
      label: 'Thời lượng',
      width: '10%',
    },
    {
      key: 'time',
      label: 'Thời gian',
      width: '15%',
    },
    {
      key: 'size',
      label: 'Dung lượng',
      width: '10%',
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
              <Download className="text-gray-500 hover:text-primary" size={16} />
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
