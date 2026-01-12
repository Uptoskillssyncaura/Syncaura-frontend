import AnnouncementItem from "./AnnouncementItem";

const Announcements = () => {
  
  const announcementData = [
    { color: "bg-blue-400", title: "New Update released on in project X", time: "12:30 PM" },
    { color: "bg-orange-400", title: "Meeting schedule updated", time: "09:15 AM" },
    { color: "bg-blue-400", title: "Server maintenance schedule", time: "Yesterday" },
  ];

  return (
    <div className="shadow-[0_4px_4px_2px_rgba(0,0,0,0.40)] flex flex-col items-start justify-center pl-4 pr-2 pt-4 pb-8 rounded-xl gap-6">
      <h2 className="text-[20px] font-bold text-black">Announcements</h2>

      <div className="flex flex-col gap-4 w-full">
        {announcementData.map((item, index) => (
          <AnnouncementItem 
            key={index}
            color={item.color}
            title={item.title}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
