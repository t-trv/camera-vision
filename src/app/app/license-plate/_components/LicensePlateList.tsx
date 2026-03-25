'use client';

import ImgModal from './ImgModal';
import Table from '@/components/table/Table';
import ModalWrapper from '@/components/modal/ModalWrapper';

import { Eye, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';

export default function LicensePlateList() {
  type TData = {
    plateNumber: string;
    time: string;
    cameraName: string;
    image: string;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const dataMockup: TData[] = [
    {
      plateNumber: '29A-123.45',
      time: '2022-01-01 12:00:00',
      cameraName: 'Camera 1',
      image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2025/12/25/1630908/Camera-Ai.jpg',
    },
    {
      plateNumber: '29A-123.45',
      time: '2022-01-01 12:00:00',
      cameraName: 'Camera 2',
      image:
        'https://congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2025/9/25/camera-csgt-1434-1758786732874848529481.jpg',
    },
    {
      plateNumber: '29A-123.45',
      time: '2022-01-01 12:00:00',
      cameraName: 'Camera 3',
      image:
        'https://images2.thanhnien.vn/528068263637045248/2025/10/7/edit_photo_qjhriwnahx-1759845645.jpg',
    },
    {
      plateNumber: '29A-123.45',
      time: '2022-01-01 12:00:00',
      cameraName: 'Camera 4',
      image:
        'https://cafefcdn.com/203337114487263232/2025/9/24/z70460446444979839230033aee0786519a1ed811b9c43-19205714-1758718940759-1758718941167288796469.jpg',
    },
  ];

  const columnConfig = [
    {
      key: 'plateNumber',
      label: 'Biển số xe',
      width: '30%',
    },
    {
      key: 'cameraName',
      label: 'Camera',
      width: '20%',
    },
    {
      key: 'time',
      label: 'Thời gian',
      width: '20%',
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
