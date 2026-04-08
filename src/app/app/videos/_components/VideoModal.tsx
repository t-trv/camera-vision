'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useState } from 'react';

export default function VideoModal({ src }: { src: string }) {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="relative">
      <div className="p-8 bg-white rounded-2xl">
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <button
          onClick={() => setIsDetail(!isDetail)}
          className=" bg-white border border-gray-200 rounded-lg p-2 shadow-sm flex items-center gap-2 mt-4"
        >
          <Eye className="text-gray-500 hover:text-primary" size={16} />
          {isDetail ? 'Ẩn thông tin' : 'Hiện thông tin'}
        </button>
      </div>

      <AnimatePresence>
        {isDetail && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 100 }}
            className="flex flex-col gap-2 absolute top-0 right-0 translate-x-[calc(100%+1rem)] bg-white p-4 rounded-xl"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Camera:</span>
              <span className="text-gray-900">Camera 1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Thời gian:</span>
              <span className="text-gray-900">2024-03-31 12:00:00</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Dung lượng:</span>
              <span className="text-gray-900">15.5 MB</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
