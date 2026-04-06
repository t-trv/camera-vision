'use client';

import { RotateCcw, SaveAll } from 'lucide-react';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import SectionInput from '../_components/SectionInput';
import {
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '../_components/Section';

import { useForm, Controller } from 'react-hook-form';
import { useAIServerStore } from '@/stores/useAIServerStore';
import toast from 'react-hot-toast';

interface SystemSettingsForm {
  serverIp: string;
  serverPort: string;
}

export default function SystemSettingsPage() {
  const { serverIp, serverPort, setServerIp, setServerPort } = useAIServerStore();

  const { control, handleSubmit, reset } = useForm<SystemSettingsForm>({
    defaultValues: {
      serverIp: serverIp,
      serverPort: serverPort,
    },
  });

  const onSubmit = (data: SystemSettingsForm) => {
    setServerIp(data.serverIp);
    setServerPort(data.serverPort);
    toast.success('Lưu thay đổi thành công');
  };

  const onReset = () => {
    reset();
    toast.success('Đặt lại thành công');
  };

  return (
    <div className="p-4">
      <Heading>Cài đặt hệ thống</Heading>
      <SubHeading>Cấu hình và cài đặt các thông số chung của hệ thống</SubHeading>

      <div className="px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* AI Server IP */}
          <SectionContainer>
            <SectionWrapper className="col-span-3">
              <SectionTitle>IP máy chủ AI</SectionTitle>
              <SectionDescription>Địa chỉ IP của máy chủ xử lý AI</SectionDescription>
            </SectionWrapper>
            <SectionWrapper className="col-span-9 px-10">
              <SectionContent>
                <Controller
                  name="serverIp"
                  control={control}
                  render={({ field }) => (
                    <SectionInput value={field.value} onChange={field.onChange} />
                  )}
                />
              </SectionContent>
            </SectionWrapper>
          </SectionContainer>

          {/* AI Server Port */}
          <SectionContainer>
            <SectionWrapper className="col-span-3">
              <SectionTitle>Cổng máy chủ AI</SectionTitle>
              <SectionDescription>Cổng của máy chủ xử lý AI</SectionDescription>
            </SectionWrapper>
            <SectionWrapper className="col-span-9 px-10">
              <SectionContent>
                <Controller
                  name="serverPort"
                  control={control}
                  render={({ field }) => (
                    <SectionInput value={field.value} onChange={field.onChange} />
                  )}
                />
              </SectionContent>
            </SectionWrapper>
          </SectionContainer>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-8 px-0">
            <Button
              type="button"
              onClick={onReset}
              size="md"
              className="w-fit"
              variant="outline"
              icon={<RotateCcw size={16} />}
            >
              Đặt lại
            </Button>
            <Button type="submit" size="md" className="w-fit" icon={<SaveAll size={16} />}>
              Lưu thay đổi
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
