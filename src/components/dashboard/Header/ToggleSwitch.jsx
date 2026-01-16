import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ToggleSwitch = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className="relative w-[50px] h-[50px]"
    >
      {/* OUTER WHITE ELLIPSE (FIGMA) */}
      <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
        
        {/* INNER ELLIPSE */}
        <div
          className={`
            w-[45px] h-[45px]
            rounded-full
            flex items-center justify-center
            ${isDark ? "bg-[#334155]" : "bg-white border-2 border-black"}
          `}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-[#FACC15]" />
          ) : (
            <Moon className="w-6 h-6 text-[#2563EB]" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;

