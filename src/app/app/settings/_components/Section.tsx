import { SETTINGS_SECTION_HEIGHT } from '@/config/ui';

export function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-12"
      style={{
        minHeight: SETTINGS_SECTION_HEIGHT,
        borderBottom: '1px solid #e5e7eb',
        padding: '24px 0',
      }}
    >
      {children}
    </div>
  );
}

export function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${className}`}>{children}</div>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg">{children}</h2>;
}

export function SectionDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

export function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}
