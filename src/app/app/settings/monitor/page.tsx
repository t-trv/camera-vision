'use client';

import { RotateCcw, SaveAll } from 'lucide-react';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import SectionSearch from '../_components/SectionSearch';
import {
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from '../_components/Section';

export default function MonitorSettingsPage() {
  return (
    <div className="p-4">
      <Heading>Cài đặt màn hình</Heading>
      <SubHeading>Cấu hình và cài đặt các thông số chung của các màn hình</SubHeading>

      {/* Camera */}
      <SectionContainer>
        <SectionWrapper className="col-span-3">
          <SectionTitle>Màn hình</SectionTitle>
          <SectionDescription>Tìm kiếm và lựa chọn màn hình cần cấu hình</SectionDescription>
        </SectionWrapper>
        <SectionWrapper className="col-span-9 px-10">
          <SectionContent>
            <SectionSearch
              value="Camera 5"
              title="Màn hình giám sát"
              subTitle="Tìm kiếm và lựa chọn camera cần cấu hình"
              options={[
                'Camera 1',
                'Camera 2',
                'Camera 3',
                'Camera 4',
                'Camera 5',
                'Camera 6',
                'Camera 7',
                'Camera 8',
                'Camera 9',
                'Camera 10',
              ]}
            />
          </SectionContent>
        </SectionWrapper>
      </SectionContainer>

      {/* Monitor ID */}
      <SectionContainer>
        <SectionWrapper className="col-span-3">
          <SectionTitle>Định danh</SectionTitle>
          <SectionDescription>
            Bạn có thể nhân bản Monitor bằng cách sửa Monitor ID rồi nhấn lưu. Bạn không thể dùng ID
            của Monitor đã tồn tại, nếu không nó sẽ ghi đè cấu hình.
          </SectionDescription>
        </SectionWrapper>
        <SectionWrapper className="col-span-9 px-10">
          <SectionContent>
            <SectionSearch
              value="Camera 1"
              title="Chế độ (Mode)"
              subTitle="Nhiệm vụ chính của Monitor."
              options={[
                'Camera 1',
                'Camera 2',
                'Camera 3',
                'Camera 4',
                'Camera 5',
                'Camera 6',
                'Camera 7',
                'Camera 8',
                'Camera 9',
                'Camera 10',
              ]}
            />
            <SectionSearch
              value="Camera 1"
              title="ID camera"
              subTitle="Mã định danh không thể thay đổi của camera"
              options={[
                'Camera 1',
                'Camera 2',
                'Camera 3',
                'Camera 4',
                'Camera 5',
                'Camera 6',
                'Camera 7',
                'Camera 8',
                'Camera 9',
                'Camera 10',
              ]}
            />
            <SectionSearch
              value="Camera 1"
              title="Tên camera"
              subTitle="Tên hiển thị dễ đọc cho Monitor."
              options={[
                'Camera 1',
                'Camera 2',
                'Camera 3',
                'Camera 4',
                'Camera 5',
                'Camera 6',
                'Camera 7',
                'Camera 8',
                'Camera 9',
                'Camera 10',
              ]}
            />
          </SectionContent>
        </SectionWrapper>
      </SectionContainer>

      {/* Position of camera */}
      <SectionContainer>
        <SectionWrapper className="col-span-3">
          <SectionTitle>Vị trí camera</SectionTitle>
          <SectionDescription>
            Bạn có thể kiểm tra vị trí, hướng ghi hình, độ rộng ghi hình.
          </SectionDescription>
        </SectionWrapper>
        <SectionWrapper className="col-span-9 px-10">
          <SectionContent>
            <SectionSearch
              value="Camera 1"
              title="Tọa độ X"
              subTitle="Tọa độ X của camera"
              options={[
                'Camera 1',
                'Camera 2',
                'Camera 3',
                'Camera 4',
                'Camera 5',
                'Camera 6',
                'Camera 7',
                'Camera 8',
                'Camera 9',
                'Camera 10',
              ]}
            />
            <SectionSearch
              value="Camera 1"
              title="Tọa độ Y"
              subTitle="Tọa độ Y của camera"
              options={[
                'Camera 1',
                'Camera 2',
                'Camera 3',
                'Camera 4',
                'Camera 5',
                'Camera 6',
                'Camera 7',
                'Camera 8',
                'Camera 9',
                'Camera 10',
              ]}
            />
            <SectionSearch
              value="Camera 1"
              title="Góc camera"
              subTitle="Góc camera"
              options={[
                'Camera 1',
                'Camera 2',
                'Camera 3',
                'Camera 4',
                'Camera 5',
                'Camera 6',
                'Camera 7',
                'Camera 8',
                'Camera 9',
                'Camera 10',
              ]}
            />
          </SectionContent>
        </SectionWrapper>
      </SectionContainer>

      <div className="flex justify-end gap-2 mt-8 px-0">
        <Button
          type="button"
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
    </div>
  );
}
