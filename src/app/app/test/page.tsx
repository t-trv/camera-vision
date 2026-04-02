'use client';

import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import ModalWrapper from '@/components/modal/ModalWrapper';
import SigninModal, { SigninForm } from './_components/SigninModal';

import { useState } from 'react';
import axios from 'axios';

export default function TestPage() {
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async (data: SigninForm) => {
    try {
      setIsLoading(true);

      const response = await axios.post('http://42.96.5.149:8080/login', {
        mail: data.mail,
        pass: data.pass,
      });

      if (response.data.ok) {
        toast.success('Đăng nhập thành công!');
        console.log('✅ Đăng nhập thành công!', {
          apiKey: response.data.apikey,
          groupKey: response.data.ke,
          uid: response.data.uid,
        });

        // Tắt modal sau khi thành công
        setIsSigninOpen(false);
      } else {
        toast.error(`Đăng nhập thất bại: ${response.data.msg}`);
        console.error('❌ Đăng nhập thất bại:', response.data.msg);
      }
    } catch (error: any) {
      toast.error(`Lỗi hệ thống: ${error.message}`);
      console.error('❌ Lỗi hệ thống:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Trang kiểm thử (Test Page)</h1>
        <p className="text-gray-500">Khu vực thử nghiệm các chức năng đang phát triển.</p>
      </div>

      <div className="flex gap-4">
        {/* Nút Sign In */}
        <Button onClick={() => setIsSigninOpen(true)}>Mở Modal Đăng nhập (Sign In)</Button>

        {/* Nút Toast hiện tại */}
        <Button variant="outline" onClick={() => toast.success('Thông báo từ Toast!')}>
          Hiện Toast thông báo
        </Button>
      </div>

      {/* Modal Signin */}
      <ModalWrapper isOpen={isSigninOpen} onClose={() => setIsSigninOpen(false)}>
        <SigninModal
          isLoading={isLoading}
          onClose={() => setIsSigninOpen(false)}
          onSignin={handleSignin}
        />
      </ModalWrapper>
    </div>
  );
}
