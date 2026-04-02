import { cn } from '@/utils/cn';

export default function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h1 className={cn('text-2xl font-semibold text-hd-primary', className)}>{children}</h1>;
}
