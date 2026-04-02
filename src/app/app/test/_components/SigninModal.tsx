'use client';

import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Loading from '@/components/ui/icons/Loading';
import SubHeading from '@/components/ui/SubHeading';
import { LogIn, X } from 'lucide-react';

import { useForm } from 'react-hook-form';

export type SigninForm = {
  mail: string;
  pass: string;
};

export default function SigninModal({
  isLoading,
  onClose,
  onSignin,
}: {
  isLoading: boolean;
  onClose: () => void;
  onSignin: (value: SigninForm) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    defaultValues: {
      mail: '',
      pass: '',
    },
  });

  const onSubmit = (data: SigninForm) => {
    onSignin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 bg-white rounded-lg w-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Heading>Đăng nhập Shinobi</Heading>
          <SubHeading>Nhập thông tin tài khoản Shinobi</SubHeading>
        </div>

        <Button type="button" variant="ghost" onClick={onClose}>
          <X size={16} />
        </Button>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <Label>Email</Label>
          <Input
            placeholder="Nhập email"
            type="email"
            {...register('mail', { required: 'Email là bắt buộc' })}
            error={errors.mail?.message as string}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Mật khẩu</Label>
          <Input
            placeholder="Nhập mật khẩu"
            type="password"
            {...register('pass', { required: 'Mật khẩu là bắt buộc' })}
            error={errors.pass?.message as string}
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-col items-center justify-end gap-2 mt-8">
        <Button
          type="submit"
          className="w-full"
          size="md"
          icon={isLoading ? <Loading size={16} /> : <LogIn size={16} />}
          disabled={isLoading}
        >
          {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </Button>
      </div>
    </form>
  );
}
