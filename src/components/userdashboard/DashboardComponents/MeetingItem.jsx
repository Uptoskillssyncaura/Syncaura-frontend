import { IoTriangle } from "react-icons/io5";

const MeetingItem = ({ time, title }) => {
  return (
    <div className="flex items-start justify-between pr-5 bg-gray-200 px-3 py-1 rounded-xl w-full">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-black font-bold text-[16px]">{time}</h3>
        <h5 className="text-gray-600 text-[16px]">{title}</h5>
      </div>

      <div className="size-9 rounded-full mt-1 bg-white/50 flex items-center justify-center
        shadow-[0_10px_6px_-1px_rgba(0,0,0,0.35)]
      ">
        <IoTriangle className="text-gray-400 size-5 rotate-90" />
      </div>
    </div>
  );
};

export default MeetingItem;
