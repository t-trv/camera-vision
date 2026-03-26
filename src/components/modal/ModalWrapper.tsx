import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ModalWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  classname?: string;
}

export default function ModalWrapper({ children, isOpen, onClose, classname }: ModalWrapperProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={() => onClose()}
          className={cn(
            'fixed inset-0 flex items-center justify-center bg-black/20 transition-all z-50',
            classname,
          )}
        >
          <div onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
