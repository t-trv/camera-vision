import toast from 'react-hot-toast';

export default function TestPage() {
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => toast.success('Hello')}
      >
        Toast
      </button>
    </div>
  );
}
