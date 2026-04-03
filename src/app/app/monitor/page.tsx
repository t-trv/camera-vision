'use client';

import Heading from '@/components/ui/Heading';
import CameraList from './_components/CameraList';
import SubHeading from '@/components/ui/SubHeading';
import ControlButton from './_components/ControlButton';
import ModalWrapper from '@/components/modal/ModalWrapper';
import AddMonitorModal from './_components/AddMonitorModal';
import UpdateMonitorModal from './_components/UpdateMonitorModal';
import DeleteMonitorModal from './_components/DeleteMonitorModal';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import queryClient from '@/utils/query';

import type { AddMonitorForm } from './_types/AddForm';

const BASE = 'http://42.96.5.149:8080';
const API_KEY = 'HM3BAOYNdLXEvFgSp8tnrNQmXf4oPq';
const GROUP = 'linhtinhgmailcom';

export default function CameraPage() {
  const [isAddCamera, setIsAddCamera] = useState(false);
  const [isUpdateCamera, setIsUpdateCamera] = useState(false);
  const [isDeleteCamera, setIsDeleteCamera] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCamera = async ({ mid, name, rtspUrl }: AddMonitorForm) => {
    try {
      setIsLoading(true);

      const url = new URL(rtspUrl);
      const config = {
        data: {
          mode: 'start',
          name: name,
          type: 'h264',
          protocol: 'rtsp',
          host: url.hostname,
          port: url.port || '554',
          path: url.pathname,
          details: {
            rtsp_transport: 'tcp',
            muser: url.username,
            mpass: url.password,
            max_keep_days: '7',
          },
        },
      };

      const endpoint = `${BASE}/${API_KEY}/configureMonitor/${GROUP}/${mid}`;
      await axios.post(endpoint, config, {
        headers: { 'Content-Type': 'application/json' },
      });

      toast.success('Thêm camera thành công');
      setIsAddCamera(false);
    } catch (error) {
      toast.error('Thêm camera thất bại');
    } finally {
      setIsLoading(false);
      queryClient.invalidateQueries({ queryKey: ['monitor'] });
    }
  };

  const handleUpdateCamera = async ({ mid, name, rtspUrl }: AddMonitorForm) => {
    try {
      setIsLoading(true);

      const url = new URL(rtspUrl);
      const config = {
        data: {
          mode: 'start',
          name: name,
          type: 'h264',
          protocol: 'rtsp',
          host: url.hostname,
          port: url.port || '554',
          path: url.pathname,
          details: {
            rtsp_transport: 'tcp',
            muser: url.username,
            mpass: url.password,
            max_keep_days: '7',
          },
        },
      };

      const endpoint = `${BASE}/${API_KEY}/configureMonitor/${GROUP}/${mid}`;
      await axios.post(endpoint, config, {
        headers: { 'Content-Type': 'application/json' },
      });

      toast.success('Cập nhật camera thành công');
      setIsUpdateCamera(false);
    } catch (error) {
      toast.error('Cập nhật camera thất bại');
    } finally {
      setIsLoading(false);
      queryClient.invalidateQueries({ queryKey: ['monitor'] });
    }
  };

  const handleRemoveCamera = async (mid: string) => {
    try {
      setIsLoading(true);

      const endpoint = `${BASE}/${API_KEY}/configureMonitor/${GROUP}/${mid}`;
      await axios.delete(endpoint);

      toast.success('Xóa camera thành công');
      setIsDeleteCamera(false);
    } catch (error) {
      toast.error('Xóa camera thất bại');
    } finally {
      setIsLoading(false);
      queryClient.invalidateQueries({ queryKey: ['monitor'] });
    }
  };

  const onEdit = (item: any) => {
    setSelectedCamera({
      mid: item.ke,
      name: item.name,
      rtspUrl: item.url,
    });
    setIsUpdateCamera(true);
  };

  const onDelete = (item: any) => {
    setSelectedCamera(item);
    setIsDeleteCamera(true);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Heading of page */}
      <div className="">
        <Heading>Màn hình</Heading>
        <SubHeading>Quản lý thêm sửa xóa màn hình giám sát</SubHeading>
      </div>

      {/* Control button */}
      <ControlButton isAddCamera={isAddCamera} setIsAddCamera={setIsAddCamera} />

      {/* List of cameras */}
      <CameraList onEdit={onEdit} onDelete={onDelete} />

      {/* Modal add camera */}
      <ModalWrapper isOpen={isAddCamera} onClose={() => setIsAddCamera(false)}>
        <AddMonitorModal
          isLoading={isLoading}
          onClose={() => setIsAddCamera(false)}
          onAdd={(value: AddMonitorForm) => handleAddCamera(value)}
        />
      </ModalWrapper>

      {/* Modal update camera */}
      <ModalWrapper isOpen={isUpdateCamera} onClose={() => setIsUpdateCamera(false)}>
        {selectedCamera && (
          <UpdateMonitorModal
            initialData={selectedCamera}
            isLoading={isLoading}
            onClose={() => setIsUpdateCamera(false)}
            onUpdate={(value: AddMonitorForm) => handleUpdateCamera(value)}
          />
        )}
      </ModalWrapper>

      {/* Modal delete camera */}
      <ModalWrapper isOpen={isDeleteCamera} onClose={() => setIsDeleteCamera(false)}>
        {selectedCamera && (
          <DeleteMonitorModal
            cameraName={selectedCamera.name}
            isLoading={isLoading}
            onClose={() => setIsDeleteCamera(false)}
            onConfirm={() => handleRemoveCamera(selectedCamera.ke || selectedCamera.mid)}
          />
        )}
      </ModalWrapper>
    </div>
  );
}
