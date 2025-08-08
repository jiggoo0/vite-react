import { FC, useEffect, useMemo, useState, KeyboardEvent } from "react";

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
  const images = useMemo(
    () =>
      imageUrl
        ? [imageUrl]
        : [
            "/images/contact/bg1.jpg",
            "/images/contact/bg2.jpg",
            "/images/contact/bg3.jpg",
            "/images/contact/bg4.jpg",
          ],
    [imageUrl]
  );

  const [currentImage, setCurrentImage] = useState(0);
  const [securityKey, setSecurityKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = async () => {
    if (!securityKey || loading) return;
    setLoading(true);
    setError(null);

    try {
      if (onSubmitSecurityKey) {
        const result = await onSubmitSecurityKey(securityKey);
        if (!result) {
          setError("Security Key ไม่ถูกต้อง");
        }
      }
    } catch {
      setError("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="relative w-full h-[22rem] sm:h-[26rem] rounded-xl overflow-hidden select-none font-mono">
      {/* Background image */}
      <img
        src={images[currentImage]}
        alt="Security Background"
        className="absolute inset-0 object-cover w-full h-full"
        draggable={false}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/images/contact/bg1.jpg";
        }}
      />

      {/* White blur gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/10 blur-sm"></div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00111f]/90 to-[#000814]/95"></div>

      {/* Scan line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,255,255,0.12)_50%,transparent_100%)] bg-[length:100%_200%] animate-scan"></div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-cyan-300 drop-shadow-lg z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-cyan-400 drop-shadow-[0_0_12px_rgba(0,212,255,0.8)] animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0V10.5m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <h2 className="mt-3 text-2xl font-semibold tracking-wide max-w-[320px] leading-snug">
            {contactText}
          </h2>
        </div>

        {/* Input & Button */}
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
          <input
            type="password"
            placeholder="••••••••"
            className="input w-full text-lg font-mono text-cyan-100 bg-white/5 backdrop-blur-md border border-cyan-600/70 focus:border-cyan-400 focus:ring focus:ring-cyan-500/50 placeholder-cyan-400/70 shadow-[0_0_25px_rgba(0,212,255,0.3)] transition-colors"
            value={securityKey}
            onChange={(e) => {
              setSecurityKey(e.target.value);
              setError(null);
            }}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
          <button
            className="btn bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-none shadow-[0_0_25px_rgba(0,212,255,0.7)] transition-transform active:scale-95"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "ยืนยัน"
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-sm text-red-500 font-semibold text-center max-w-md px-2 select-text">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlurContact;
