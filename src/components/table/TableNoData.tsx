import { FolderOpen } from 'lucide-react';

export default function TableNoData() {
  return (
    <div className="text-center py-10 w-full text-gray-500 font-semibold text-sm">
      <FolderOpen className="w-12 h-12 mx-auto mb-2" />
      Không có dữ liệu, vui lòng kiểm tra lại!
    </div>
  );
}
