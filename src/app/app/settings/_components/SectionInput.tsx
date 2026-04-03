interface SectionInputProps {
  value: string;
  onChange?: (value: string) => void;
}

export default function SectionInput({ value, onChange }: SectionInputProps) {
  return (
    <div>
      <input
        type="text"
        className="w-full border border-gray-300 p-2 rounded-md mt-2"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
