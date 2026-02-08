
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from 'lucide-react'
import ToggleSwitch from "../../dashboard/Header/ToggleSwitch"
import { FaBars } from 'react-icons/fa'

import { useState } from "react";
import ToggleSwitch from "../../dashboard/Header/ToggleSwitch";



const Header = ({ setOpen }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [user,setUser]=useState(null);
  useEffect(()=>{
    const u=JSON.parse(localStorage.getItem("user"));
    setUser(u);
  },[]);



  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const dayName = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <div className="text-black py-3 bg-[#FFFFFF] dark:bg-[#2E2F2F] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.25)] w-full flex items-center justify-end z-50">
      <div className="w-full flex items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Profile Section */}
          <div className="flex gap-2 items-center">
            {/* Avatar */}

            <div
              onClick={() => setShowProfile(prev => !prev)}
              className="size-12 rounded-full bg-linear-to-b from-red-600 to-red-900
              text-white flex items-center justify-center font-semibold text-xl
              cursor-pointer sm:cursor-none"
            >
              {user?.name?.charAt(0)||"U"}
            </div>

            <div className="hidden sm:flex flex-col items-start justify-center -space-y-1.5">
              <div className='flex gap-1 items-center justify-center text-black dark:text-white'>
                <h1 className='font-light text-lg'>Hello!</h1>
                <h1 className='font-semibold text-lg'>{user?.name||"User"}</h1>
              </div>
              <div className='flex items-center text-[#989696] justify-start font-semibold text-sm'>
                {user?.role}

            <div className="size-10 sm:size-12 rounded-full bg-gradient-to-b from-red-600 to-red-900 text-white flex items-center justify-center font-semibold text-lg sm:text-xl">
              J
            </div>

            {/* Profile Text */}
            <div className="flex flex-col">
              <div className="flex gap-1 items-center text-black dark:text-white">
                <h1 className="font-light text-base sm:text-lg">Hello!</h1>
                <h1 className="font-semibold text-base sm:text-lg">John Doe</h1>
              </div>
              <div className="text-[#989696] font-semibold text-xs sm:text-sm -mt-1">
                Employee

              </div>
            </div>
          </div>
        </div>


            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-14 left-0 sm:hidden
                  bg-white dark:bg-[#383a3a]
                  shadow-xl rounded-xl px-4 py-3 z-50"
                >
                  <div className="flex flex-col w-60 items-start justify-center -space-y-1.5">
                    <div className="flex gap-1 items-center justify-center text-black dark:text-white">
                      <h1 className="font-light text-lg">Hello!</h1>
                      <h1 className="font-semibold text-lg">{user?.name||"User"}</h1>
                    </div>
                    <div className="flex items-center text-[#989696] justify-start font-semibold text-sm">
                     {user?.role}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

        {/* RIGHT SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 items-end">
          {/* Desktop date */}
          <div className="hidden sm:flex items-center gap-1.5 text-base dark:text-white">
            <span className="font-bold">{dayName}</span>
            <span className="font-light"> | {formattedDate}</span>
          </div>

        {/* Mobile toggle and date below */}
          <div className="sm:hidden flex flex-col items-center">
            <ToggleSwitch />
            <span className="text-sm dark:text-white mt-1 text-center">
  <span className="font-medium">{dayName}</span>
  {" | "}
  <span className="font-normal">{formattedDate}</span>
</span>


          </div>

          {/* Desktop toggle */}
          <div className="hidden sm:block">
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;