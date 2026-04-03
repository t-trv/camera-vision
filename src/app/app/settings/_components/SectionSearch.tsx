interface SectionSearchProps {
  title: string;
  subTitle: string;
  options: string[];
  value: string;
  onChange?: (value: string) => void;
}

export default function SectionSearch({
  title,
  subTitle,
  options,
  value,
  onChange,
}: SectionSearchProps) {
  return (
    <div>
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm text-gray-500">{subTitle}</p>
      <select className="w-full border border-gray-300 p-2 rounded-md mt-2" defaultValue={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
