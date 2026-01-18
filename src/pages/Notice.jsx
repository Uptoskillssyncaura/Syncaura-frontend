import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMethod } from "../redux/slices/themeSlice";
import { Filter, Funnel, Plus, Search } from "lucide-react";
import RecentActivity from "../components/notice/RecentActivity";
import NotificationRow from "../components/notice/NotificationRow";
import { notificationsList } from "../constant/constant";
import NewNoticeModal from "../components/notice/NewNoticeModel";

const Notice = () => {
  const isdark = useSelector((state) => state.theme.isDark);
  const [showModel, setShowModal] = useState(false);
  const toggleTheme = () => {
    useDispatch(toggleThemeMethod());
  };
  const [fewNotification, setFewNotification]=useState(notificationsList.slice(0, 7))
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  // Filter notifications based on search and category
  const filteredNotifications = notificationsList.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.about.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || 
                            notification.category.toLowerCase() === filterCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  // Display limited number of filtered notifications
  const displayNotifications = filteredNotifications.slice(0, fewNotification.length)
  return (
    <div className="relative w-full transition-colors duration-500  border-t dark:border-[#000000] h-full bg-[#FFFFFF] dark:bg-black pt-6 pb-24 overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center mb-8 border-b border-[#E0DDDD] dark:border-[#575757] pt-3 px-5 pb-2 w-full gap-y-2  ">
        <h1
          className={`flex-2/3 flex items-center justify-center sm:justify-start text-2xl font-semibold dark:text-gray-100 text-[#000000] w-full`}
        >
          Notice Board Management
        </h1>
        <div className="flex-1/3 flex items-center justify-center sm:justify-end  gap-2 ">
          <div className="flex-1/4 flex items-center justify-center w-full px-5 py-1 gap-2 border rounded-4xl border-[#989696] dark:border-[#FFFFFF] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Funnel className="size-5 text-[#575757] dark:text-[#FFFFFF]    " />
            <select 
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="text-lg text-[#575757] dark:text-[#FFFFFF] bg-transparent outline-none cursor-pointer"
            >
              <option value="all">All</option>
              <option value="general">General</option>
              <option value="urgent">Urgent</option>
              <option value="meeting">Meeting</option>
              <option value="holiday">Holiday</option>
            </select>
          </div>
          <div className="flex-3/4 flex col-span-5 items-center  w-full gap-x-2 bg-[#EDEDED] dark:bg-[#2E2F2F] px-4 rounded-3xl py-2">
            <Search className="size-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-[#A19C9C]  dark:text-[#acabab] text-sm  placeholder:text-sm  placeholder:text-[#A19C9C] dark:placeholder:text-[#acabab]"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-2 sm:px-10  ">
        <RecentActivity />
      </div>
      <div className="flex flex-col items-start justify-center  w-full">
        <div className="flex items-center justify-start w-full px-2 md:px-10 ">
          <h1 className="text-2xl text-black dark:text-white font-medium px-2 md:px-5">
            Latest Updates
          </h1>
        </div>
        <div className="flex items-center justify-center w-full px-2 md:px-10 mt-3">
          <div className="flex flex-col gap-2 justify-center w-full ">
            {displayNotifications.length > 0 ? (
              displayNotifications.map((item, idx) => (
                <NotificationRow
                  key={item.id}
                  about={item.about}
                  title={item.category}
                  date={item.date}
                  bgColor={
                    idx % 3 === 0
                      ? "bg-red-50"
                      : idx % 3 === 1
                      ? "bg-purple-50"
                      : "bg-blue-50"
                  }
                  docColor={
                    idx % 3 === 0
                      ? "text-red-500"
                      : idx % 3 === 1
                      ? "text-purple-500"
                      : "text-blue-500"
                  }
                />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No notifications found matching your criteria.
              </div>
            )}
            {displayNotifications.length !== filteredNotifications.length && displayNotifications.length > 0 && (
              <div className="w-full flex items-center justify-center mt-4" >
              <button onClick={()=>{
                setFewNotification((prev)=>[...prev, ...notificationsList.slice(prev.length, prev.length+7)])
              }} className="flex items-center justify-center text-[#C05328] text-xl hover:underline" >
                Load More Notifications
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2
                   rounded-full bg-blue-600 dark:bg-[#73FBFD] dark:text-black transition duration-500 px-6 py-3
                   text-white shadow-lg hover:bg-blue-400 dark:hover:bg-[#2cc4c7]"
      >
        <Plus size={18} />
        New Notice
      </button>
      {showModel && <NewNoticeModal onClose={()=>setShowModal(false)} addNotice={setFewNotification} />}
    </div>
  );
};

export default Notice;
