import { Clock } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div
      className="
        flex items-center justify-between
        mb-8

        /* 🔥 FIGMA SPACING FIX */
        mt-[20px]        /* move dashboard DOWN */
        ml-[30px]        /* move away from sidebar */
        mr-[32px]
      "
    >
      {/* LEFT */}
      <div>
        <h1
          className="
            font-poppins
            text-[28px]
            font-bold
            leading-[100%]
            text-[#020617]
            dark:text-[#F1F5F9]
          "
        >
          Dashboard Overview
        </h1>

        <p
          className="
            mt-[18px]
            font-poppins
            text-[17px]
            font-semibold
            leading-[100%]
            text-[#94A3B8]
          "
        >
          Welcome back, here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* RIGHT: LAST UPDATED BOX */}
      <div
        className="
          w-[238px] h-[42px]
          flex items-center gap-2
          px-[14px] -mr-2 mt-5
          rounded-[7px]
          bg-white
          dark:bg-[#1E293B]

          border border-black/5
          dark:border-white/10
        "
      >
        <span
          className="
            font-poppins
           
            text-[11px]
            font-semibold
            leading-[100%]
            text-[#64748B]
            whitespace-nowrap
          "
        >
          Last updated: Just now
        </span>

        <Clock className="w-4 h-4 text-[#64748B] ml-auto" />
      </div>
    </div>
  );
};

export default DashboardHeader;
