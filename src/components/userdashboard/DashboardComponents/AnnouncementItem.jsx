const AnnouncementItem = ({ color, title, time }) => {
  return (
    <div className="flex gap-2 items-start justify-start">
      <div className={`size-3 rounded-full mt-2 ${color}`} />
      <div className="flex flex-col gap-0.5 justify-start items-start">
        <h5 className="font-semibold text-[16px] text-black">{title}</h5>
        <h5 className="font-medium text-[16px] text-gray-500">{time}</h5>
      </div>
    </div>
  );
};

export default AnnouncementItem;
