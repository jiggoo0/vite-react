interface TrustBadgeProps {
  count: number;
  label?: string;
  className?: string;
}

const TrustBadge = ({
  count,
  label = "ลูกค้ามั่นใจในเรา",
  className = "",
}: TrustBadgeProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
        role="status"
        aria-label={`${count}+ ${label}`}
      >
        <span className="text-2xl md:text-3xl font-extrabold text-white">
          {count}+
        </span>
        <span className="text-sm md:text-base font-medium text-white">
          {label}
        </span>
      </div>
    </div>
  );
};

export default TrustBadge;
