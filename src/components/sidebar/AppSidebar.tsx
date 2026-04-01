'use client';

import {
  AlertCircle,
  Calendar,
  Camera,
  Car,
  Home,
  Map,
  Monitor,
  Network,
  Plug,
  Settings,
  User,
  Video,
  Filter,
  Clock,
} from 'lucide-react';
import SidebarItem from './SidebarItem';
import SidebarCategory from './SidebarCategory';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { APP_VERSION } from '@/config/app';

export default function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const appRoutes = [
    {
      category: 'Trang chủ',
      items: [
        {
          path: '/app',
          label: 'Tổng quan',
          icon: <Home size={16} />,
        },
        {
          path: '/app/alert',
          label: 'Cảnh báo',
          icon: <AlertCircle size={16} />,
        },
      ],
    },
    {
      category: 'Camera',
      items: [
        {
          path: '/app/monitor',
          label: 'Giám sát trực tiếp',
          icon: <Monitor size={16} />,
        },
        {
          path: '/app/camera',
          label: 'Màn hình giám sát',
          icon: <Camera size={16} />,
        },
        {
          path: '/app/timeline',
          label: 'Dòng thời gian',
          icon: <Clock size={16} />,
        },
        {
          path: '/app/camera-map',
          label: 'Bản đồ camera',
          icon: <Map size={16} />,
        },
        {
          path: '/app/videos',
          label: 'Danh sách videos',
          icon: <Video size={16} />,
        },
      ],
    },
    {
      category: 'Cài đặt',
      items: [
        {
          path: '/app/settings/monitor',
          label: 'Cài đặt màn hình',
          icon: <Monitor size={16} />,
        },
        {
          path: '/app/settings/camera',
          label: 'Cài đặt camera',
          icon: <Camera size={16} />,
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 h-full p-4 flex flex-col">
      <div className="flex-1 space-y-4">
        {appRoutes.map((route) => (
          <SidebarCategory key={route.category} title={route.category}>
            {route.items.map((item) => (
              <SidebarItem
                key={item.path}
                icon={item.icon}
                onClick={() => router.push(item.path)}
                isActive={pathname === item.path}
              >
                {item.label}
              </SidebarItem>
            ))}
          </SidebarCategory>
        ))}
      </div>

      <p className="mt-auto text-xs text-gray-500 font-semibold text-center">
        Camera AI v{APP_VERSION}
      </p>
    </div>
  );
}
