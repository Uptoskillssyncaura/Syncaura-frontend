import { Search, Bell, User } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  return (
    <header
      className="
        flex items-center justify-between
        h-[86px]
        px-6
        bg-white dark:bg-[#0E1628]
        border-b border-[#E5E7EB] dark:border-[#1E293B]
      "
    >
      {/* SEARCH */}
      <div className="flex items-center max-w-[360px] w-full">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search projects, tasks, documents..."
            className="
              w-full h-[53px]
              pl-11 pr-4
              rounded-[5px]
              bg-[#F1F5F9] dark:bg-[#1E293B]
              text-sm
              placeholder:text-[#64748B]
              focus:outline-none
            "
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-5">
        {/* THEME TOGGLE */}
        <ToggleSwitch />

        {/* NOTIFICATION */}
        <div className="relative">
          <Bell className="w-5 h-5 text-[#0F172A] dark:text-white" />

          {/* RED DOT (FIXED POSITION) */}
          <span
            className="
              absolute
              -top-2
              -right-1
              w-2.5 h-2.5
              bg-red-500
              rounded-full
            "
          />
        </div>

        {/* PROFILE (FIGMA MATCH) */}
        <button
          className="
            w-[45px] h-[45px]
            rounded-full
            flex items-center justify-center
            bg-white
            border border-[#CBD5E1]
            dark:bg-[#334155]
            dark:border-black
          "
        >
          <User className="w-5 h-5 text-[#64748B] dark:text-[#E5E7EB]" />
        </button>
      </div>
    </header>
  );
};

export default Header;

