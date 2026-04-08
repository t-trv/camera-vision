import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-dark">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="rounded-full h-32 w-32 border-b-2 border-primary"
      />
    </div>
  );
}
