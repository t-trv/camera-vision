'use client';

import ImgModal from './ImgModal';
import Table from '@/components/table/Table';
import ModalWrapper from '@/components/modal/ModalWrapper';

import { Eye, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';

export default function StrangerList() {
  type TData = {
    eventName: string;
    cameraName: string;
    time: string;
    image: string;
    status: string;
    note: string;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const dataMockup: TData[] = [
    {
      eventName: 'Người lạ',
      cameraName: 'Camera 1',
      time: '2022-01-01 12:00:00',
      image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2025/12/25/1630908/Camera-Ai.jpg',
      status: 'Đã xử lý',
      note: 'Ghi chú',
    },
    {
      eventName: 'Người lạ',
      cameraName: 'Camera 2',
      time: '2022-01-01 12:00:00',
      image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2025/12/25/1630908/Camera-Ai.jpg',
      status: 'Đã xử lý',
      note: 'Ghi chú',
    },
    {
      eventName: 'Người lạ',
      cameraName: 'Camera 3',
      time: '2022-01-01 12:00:00',
      image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2025/12/25/1630908/Camera-Ai.jpg',
      status: 'Đã xử lý',
      note: 'Ghi chú',
    },
    {
      eventName: 'Người lạ',
      cameraName: 'Camera 4',
      time: '2022-01-01 12:00:00',
      image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2025/12/25/1630908/Camera-Ai.jpg',
      status: 'Đã xử lý',
      note: 'Ghi chú',
    },
  ];

  const columnConfig = [
    {
      key: 'eventName',
      label: 'Sự kiện',
      width: '10%',
    },
    {
      key: 'cameraName',
      label: 'Camera',
      width: '10%',
    },
    {
      key: 'time',
      label: 'Thời gian',
      width: '10%',
    },
    {
      key: 'image',
      label: 'Ảnh',
      width: '10%',
      render: (value: any) => {
        return (
          <div className="flex items-center gap-2">
            <button
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setImgSrc(value.image);
              }}
            >
              <Eye className="text-gray-500 hover:text-primary" size={16} />
            </button>
          </div>
        );
      },
    },
    {
      key: 'status',
      label: 'Trạng thái',
      width: '10%',
    },
    {
      key: 'note',
      label: 'Ghi chú',
      width: '10%',
    },
    {
      key: 'action',
      label: 'Hành động',
      width: '10%',
      render: (value: any) => {
        return (
          <div className="flex items-center gap-2">
            <button
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setImgSrc(value.image);
              }}
            >
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

      <ModalWrapper isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ImgModal src={imgSrc} />
      </ModalWrapper>
    </div>
  );
}
