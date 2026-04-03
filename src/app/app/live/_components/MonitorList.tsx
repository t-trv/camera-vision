'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import axios from 'axios';

import { MonitorType } from '@/types/monitor';

export default function MonitorList() {
  const [isExpand, setIsExpand] = useState(false);

  const { data, isLoading, error } = useQuery<MonitorType[]>({
    queryKey: ['monitor'],
    queryFn: () =>
      axios
        .get('http://42.96.5.149:8080/HM3BAOYNdLXEvFgSp8tnrNQmXf4oPq/monitor/linhtinhgmailcom')
        .then((res) => res.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button
        onClick={() => setIsExpand(!isExpand)}
        className="flex items-center gap-2 transition-all duration-300 cursor-pointer font-semibold text-sm text-gray-700"
      >
        Danh sách camera{' '}
        {!isExpand ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </button>

      {isExpand && (
        <div className="px-2 mt-2">
          {data?.map((item: MonitorType, index: number) => (
            <motion.div
              key={item.mid}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.05 }}
            >
              <input type="checkbox" id={item.mid} />
              <label htmlFor={item.mid}>{item.name}</label>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
