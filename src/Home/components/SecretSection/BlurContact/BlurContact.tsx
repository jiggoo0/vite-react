import { FC, useEffect, useState } from "react";

export interface BlurContactProps {
  imageUrl?: string;
  contactText?: string;
  onSubmitSecurityKey?: (key: string) => Promise<boolean> | boolean;
}

const BlurContact: FC<BlurContactProps> = ({
  imageUrl,
  contactText = "กรอกรหัส Security Key เพื่อยืนยันความปลอดภัย",
  onSubmitSecurityKey,
}) => {
  const images = imageUrl
    ? [imageUrl]
    : [
        "/images/contact/bg1.jpg",
        "/images/contact/bg2.jpg",
        "/images/contact/bg3.jpg",
        "/images/contact/bg4.jpg",
      ];

  const [currentImage, setCurrentImage] = useState(0);
  const [securityKey, setSecurityKey] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = async () => {
    if (!securityKey) return;

    if (onSubmitSecurityKey) {
      const result = await onSubmitSecurityKey(securityKey);
      if (!result) {
        setError("Security Key ไม่ถูกต้อง");
        return;
      }
    }

    setError(null);
  };

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Security Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-md brightness-75 scale-110 transition-transform duration-1000 ease-in-out"
        draggable={false}
        onError={(e) =>
          ((e.target as HTMLImageElement).src = "/images/contact/bg1.jpg")
        }
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          {contactText}
        </h2>
        <div className="w-full max-w-sm flex flex-col sm:flex-row gap-3">
          <input
            type="password"
            placeholder="Security Key"
            className="input input-bordered w-full text-base"
            value={securityKey}
            onChange={(e) => setSecurityKey(e.target.value)}
          />
          <button
            className="btn btn-primary w-full sm:w-auto"
            onClick={handleSubmit}
          >
            ยืนยัน
          </button>
        </div>
        {error && (
          <p className="mt-3 text-sm text-red-400 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default BlurContact;