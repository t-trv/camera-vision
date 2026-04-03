'use client';

import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Loading from '@/components/ui/icons/Loading';
import SubHeading from '@/components/ui/SubHeading';
import { PlusIcon, X } from 'lucide-react';

import { useForm } from 'react-hook-form';

import type { AddMonitorForm } from '../_types/AddForm';

export default function AddMonitorModal({
  isLoading,
  onClose,
  onAdd,
}: {
  isLoading: boolean;
  onClose: () => void;
  onAdd: (value: AddMonitorForm) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMonitorForm>({
    defaultValues: {
      mid: '',
      name: '',
      rtspUrl: '',
    },
  });

  const onSubmit = (data: AddMonitorForm) => {
    onAdd(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Heading>Thêm camera</Heading>
          <SubHeading>Thêm camera vào hệ thống</SubHeading>
        </div>

        <Button type="button" variant="ghost" onClick={onClose}>
          <X size={16} />
        </Button>
      </div>

      {/* ID and Name */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label>Mã thiết bị</Label>
          <Input
            placeholder="Nhập mã thiết bị"
            {...register('mid', { required: 'Mã thiết bị là bắt buộc' })}
            error={errors.mid?.message as string}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Tên thiết bị</Label>
          <Input
            placeholder="Nhập tên thiết bị"
            {...register('name', { required: 'Tên thiết bị là bắt buộc' })}
            error={errors.name?.message as string}
          />
        </div>
      </div>

      {/* URL RTSP */}
      <div className="flex flex-col gap-2">
        <Label>URL RTSP</Label>
        <Input
          placeholder="Nhập URL RTSP"
          {...register('rtspUrl', { required: 'URL RTSP là bắt buộc' })}
          error={errors.rtspUrl?.message as string}
        />
      </div>

      {/* Button */}
      <div className="flex flex-col items-center justify-end gap-2 mt-8">
        <Button
          type="submit"
          className="w-full"
          size="md"
          icon={isLoading ? <Loading size={16} /> : <PlusIcon size={16} />}
          disabled={isLoading}
        >
          {isLoading ? 'Đang thêm...' : 'Thêm'}
        </Button>
      </div>
    </form>
  );
}
