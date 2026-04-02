'use client';

import Table from '@/components/table/Table';
import { Pencil, Trash2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function CameraList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cameras'],
    queryFn: () =>
      axios
        .get('http://42.96.5.149:8080/HM3BAOYNdLXEvFgSp8tnrNQmXf4oPq/monitor/linhtinhgmailcom')
        .then((res) => res.data),
  });

  const columnConfig = [
    {
      key: 'name',
      label: 'Tên camera',
      width: '10%',
    },
    {
      key: 'ke',
      label: 'Key',
      width: '10%',
    },
    {
      key: 'url',
      label: 'URL',
      width: '10%',
    },
    {
      key: 'host',
      label: 'Host',
      width: '10%',
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
      render: (item: any) => {
        return (
          <div className="flex gap-2">
            <button className="cursor-pointer hover:text-blue-500">
              <Pencil size={16} />
            </button>
            <button className="cursor-pointer hover:text-red-500">
              <Trash2 size={16} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table columns={columnConfig} data={data} />
    </div>
  );
}
