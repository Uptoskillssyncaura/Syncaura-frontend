import { ArrowLeft, MoreVertical, Phone, Search } from "lucide-react";
import Avatar from "../Avatar";

export default function ChatHeader({ chat, onBack, setOpen }) {
  const handleProfileClick = () => {
    setOpen(true)
  };

  const handlePhoneClick = (e) => {
    e.stopPropagation();
    console.log("Phone clicked");
  };

  const handleSearchClick = (e) => {
    e.stopPropagation();
    console.log("Search clicked");
  };

  const handleMoreClick = (e) => {
    e.stopPropagation();
    console.log("Three dots clicked");
  };

  const handleBackClick = (e) => {
    e.stopPropagation();
    onBack();
  };

  return (
    <div className="h-16 flex items-center justify-between px-4 border-b bg-[#FFFFFF] dark:bg-[#2E2F2F]">
      
      {/* Profile section */}
      <div
        onClick={handleProfileClick}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* Back button (mobile only) */}
        <button onClick={handleBackClick} className="md:hidden">
          <ArrowLeft size={20} className="text-black dark:text-gray-300" />
        </button>

        <Avatar label={chat.avatar} gradient={chat.gradient} />

        <div>
          <p className="font-semibold text-lg text-black dark:text-white">
            {chat.name}
          </p>
          <p className="text-sm text-black dark:text-white">
            Last seen yesterday
          </p>
        </div>
      </div>

      {/* Action icons */}
      <div className="flex gap-4 xl:gap-7 text-gray-600 dark:text-gray-400">
        <Phone onClick={handlePhoneClick} className="cursor-pointer" />
        <Search onClick={handleSearchClick} className="cursor-pointer" />
        <MoreVertical onClick={handleMoreClick} className="cursor-pointer" />
      </div>
    </div>
  );
}
 