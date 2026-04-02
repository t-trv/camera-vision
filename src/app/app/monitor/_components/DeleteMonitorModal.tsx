'use client';

import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Loading from '@/components/ui/icons/Loading';
import SubHeading from '@/components/ui/SubHeading';
import { Trash2, X } from 'lucide-react';

export default function DeleteMonitorModal({
  cameraName,
  isLoading,
  onClose,
  onConfirm,
}: {
  cameraName: string;
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="p-4 space-y-4 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Heading className="text-red-600">Xóa camera</Heading>
          <SubHeading>Hành động này không thể hoàn tác</SubHeading>
        </div>

        <Button type="button" variant="ghost" onClick={onClose}>
          <X size={16} />
        </Button>
      </div>

      <div className="py-4">
        <p className="text-gray-700">
          Bạn có chắc chắn muốn xóa camera <strong>{cameraName}</strong> không?
          Mọi dữ liệu liên quan sẽ bị xóa khỏi hệ thống.
        </p>
      </div>

      {/* Button */}
      <div className="flex items-center justify-end gap-2 mt-4">
        <Button variant="ghost" type="button" onClick={onClose} disabled={isLoading}>
          Hủy
        </Button>
        <Button
          variant="danger"
          type="button"
          onClick={onConfirm}
          size="md"
          icon={isLoading ? <Loading size={16} /> : <Trash2 size={16} />}
          disabled={isLoading}
        >
          {isLoading ? 'Đang xóa...' : 'Xác nhận xóa'}
        </Button>
      </div>
    </div>
  );
}
