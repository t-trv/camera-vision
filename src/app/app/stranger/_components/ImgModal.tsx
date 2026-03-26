export default function ImgModal({ src }: { src: string }) {
  return (
    <div className="bg-white p-4 rounded-lg ">
      {src ? (
        <img src={src} alt="" className="max-w-[600px] max-h-[600px] object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500">No image</p>
        </div>
      )}
    </div>
  );
}
