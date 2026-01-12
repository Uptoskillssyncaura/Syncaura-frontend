import { SquareCheckBigIcon } from "lucide-react";

const StatsCard = ({
  iconBg = "bg-blue-50",
  iconColor = "text-blue-700",
  percentage = "+12%",
  percentageBg = "bg-blue-200",
  percentageText = "text-blue-700",
  title = "Due Today",
  value = 4,
  className = "",
}) => {
  return (
    <div
  className={`
    w-full
    flex flex-col px-5 pt-4 pb-8 rounded-2xl
    shadow-[0_6px_6px_3px_rgba(0,0,0,0.28),0_-1px_1px_1px_rgba(0,0,0,0.15)]
    bg-white transition-all duration-300
    ${className}
  `}
>

      <div className="flex items-center justify-between">
        <div className={`flex items-center justify-center px-4 py-3 rounded-xl ${iconBg}`}>
          <SquareCheckBigIcon className={`size-5 ${iconColor}`} />
        </div>

        <div className={`flex items-center justify-center px-3  py-0.5 rounded-xl ${percentageBg}`}>
          <p className={`${percentageText} font-bold text-sm`}>{percentage}</p>
        </div>
      </div>

      <p className="mt-3 text-black">{title}</p>
      <h2 className="font-bold text-3xl mt-1 text-black">{value}</h2>
    </div>
  );
};

export default StatsCard;
