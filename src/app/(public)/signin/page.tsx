'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, Shield, ArrowRight, Lock, User as UserIcon } from 'lucide-react';
import useUserStore from '@/stores/useUserStore';

export default function SignInPage() {
  const router = useRouter();
  const { setUser } = useUserStore();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: '1',
      name: 'Quản trị viên',
      email: 'admin@system.com',
      avatar: '',
      role: 'admin',
      permissions: ['all'],
    });
    router.push('/');
  };

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* Dark blue top section */}
      <div className="bg-blue-dark text-white h-full flex items-center justify-center">
        {/* Main */}
        <div className="bg-white shadow-2xl px-10 py-20 max-w-md w-full border border-slate-100 rounded-lg">
          <div className="text-center mb-10">
            <h1 className="text-3xl text-slate-900 font-bold mb-3">Đăng Nhập</h1>
            <p className="text-slate-500 text-sm">
              Truy cập vào bảng điều khiển hệ thống quản lý AI
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label
                className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2"
                htmlFor="username"
              >
                Tài Khoản
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 border border-slate-200 text-slate-900 bg-slate-50 focus:ring-2 focus:ring-blue-dark focus:border-transparent outline-none transition-all"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 border border-slate-200 text-slate-900 bg-slate-50 focus:ring-2 focus:ring-blue-dark focus:border-transparent outline-none transition-all"
                  placeholder="Nhập mật khẩu"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-dark hover:bg-[#1a4470] text-white py-3 transition-colors font-semibold shadow-md mt-6"
            >
              Đăng nhập
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
