import { useRef, useState } from "react";
import { ImagePlus, X, Upload } from "lucide-react";

interface DealImageUploadProps {
  value?: File | null;
  onChange: (file: File | null) => void;
}

const DealImageUpload = ({
  value,
  onChange,
}: DealImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Only allow images
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // Optional size limit: 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    onChange(file);

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const handleRemove = () => {
    onChange(null);
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        Deal Image
      </label>

      <p className="mb-4 text-sm text-[var(--text-color)]/60">
        Upload an image that represents this deal.
      </p>

      {!preview ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
            flex
            min-h-56
            w-full
            flex-col
            items-center
            justify-center
            rounded-2xl
            border-2
            border-dashed
            border-[var(--primary-color)]/20
            bg-[var(--background-color)]
            p-6
            text-center
            transition-all
            hover:border-[var(--primary-color)]/50
            hover:bg-[var(--primary-color)]/5
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[var(--primary-color)]/10
              text-[var(--primary-color)]
            "
          >
            <ImagePlus size={26} />
          </div>

          <h3 className="mt-4 font-semibold">
            Upload Deal Image
          </h3>

          <p className="mt-1 text-sm text-[var(--text-color)]/50">
            Click to select an image
          </p>

          <p className="mt-2 text-xs text-[var(--text-color)]/40">
            PNG, JPG or WEBP • Max 5MB
          </p>
        </button>
      ) : (
        <div className="relative overflow-hidden rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--background-color)]">

          <img
            src={preview}
            alt="Deal preview"
            className="
              h-64
              w-full
              object-cover
            "
          />

          {/* Remove button */}
          <button
            type="button"
            onClick={handleRemove}
            className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-black/70
              text-white
              backdrop-blur
              transition
              hover:bg-red-500
              active:scale-95
            "
            title="Remove image"
          >
            <X size={18} />
          </button>

          {/* Change image */}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="
              absolute
              bottom-3
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-2
              rounded-xl
              bg-black/70
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              backdrop-blur
              transition
              hover:bg-black/90
            "
          >
            <Upload size={16} />
            Change Image
          </button>
        </div>
      )}

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Selected filename */}
      {value && (
        <p className="mt-3 truncate text-xs text-[var(--text-color)]/50">
          Selected: {value.name}
        </p>
      )}
    </div>
  );
};

export default DealImageUpload;