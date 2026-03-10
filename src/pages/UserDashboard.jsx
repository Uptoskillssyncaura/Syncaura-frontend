import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Analytics from "../components/userdashboard/subpages/Analytics";
import Projects from "../components/userdashboard/subpages/Projects";
import Dashboard from "../components/userdashboard/subpages/Dashboard";

const UserDashboard = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  const tabs = ["Dashboard", "Projects", "Analytics"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [direction, setDirection] = useState(0);

  const handleTabChange = (tab) => {
    const currentIndex = tabs.indexOf(selectedTab);
    const nextIndex = tabs.indexOf(tab);

    setDirection(nextIndex > currentIndex ? 1 : -1);
    setSelectedTab(tab);
  };

  return (
    <div className="relative w-full h-full flex flex-col transition-colors duration-500 border-t dark:border-black bg-white dark:bg-black">

      <div className="flex flex-col sm:flex-row items-center justify-between lg:justify-start px-5 md:px-10 gap-10 gap-y-3 pt-6">
        <h1 className="text-2xl font-medium text-black dark:text-white">
          Dashboard
        </h1>

       
        <div className="relative flex items-center px-5 py-2 gap-5 rounded-3xl border border-[#E3E3E3] dark:border-[#73FBFD]">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => handleTabChange(item)}
              className="relative z-10 px-3 py-1"
            >
              {selectedTab === item && (
                <motion.div
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute inset-0 rounded-2xl bg-blue-100 dark:bg-[#73FBFD]"
                />
              )}

              <motion.span
                animate={{
                  color:
                    selectedTab === item
                      ? isDark
                        ? "#000000"
                        : "#2461E6"
                      : isDark
                      ? "#FFFFFF"
                      : "#9CA3AF",
                }}
                transition={{ duration: 0.2 }}
                className={`relative text-xs ${selectedTab===item ? "font-bold": "font-semibold"} sm:text-sm `}
              >
                {item}
              </motion.span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden px-5 md:px-10 pt-6 pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedTab}
            custom={direction}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 overflow-y-auto no-scrollbar rounded-xl p-6"
          >
        
           {selectedTab === "Dashboard" && <Dashboard/>}
             {selectedTab === "Analytics" && <Analytics/>}
             {selectedTab === "Projects" && <Projects/>}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserDashboard;