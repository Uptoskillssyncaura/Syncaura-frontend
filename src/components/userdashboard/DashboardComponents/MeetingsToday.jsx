import MeetingItem from "./MeetingItem"; // import above file

const MeetingsToday = () => {
  const meetings = [
    { time: "02:00 PM", title: "Client Meeting" },
    { time: "05:00 PM", title: "Team Scrum" },
  ];

  return (
    <div className="shadow-[0_4px_4px_2px_rgba(0,0,0,0.40)] flex flex-col items-start justify-center pl-4 pr-5 pt-4 pb-8 rounded-xl gap-6">
      <h2 className="text-[20px] font-bold text-black">Meetings Today</h2>
      <div className="flex flex-col gap-5 w-full pr-5">
        {meetings.map((m, i) => (
          <MeetingItem key={i} time={m.time} title={m.title} />
        ))}
      </div>
    </div>
  );
};

export default MeetingsToday;
