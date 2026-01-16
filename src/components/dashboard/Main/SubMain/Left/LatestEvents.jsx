import { Calendar, Clock } from "lucide-react";

const events = [
  { id: "1", title: "Team standup", time: "10:00 AM", type: "meeting" },
  { id: "2", title: "Project deadline", time: "2:00 PM", type: "deadline" },
  { id: "3", title: "Client call", time: "4:30 PM", type: "meeting" },
];

const typeColors = {
  meeting: "bg-stat-blue",
  deadline: "bg-stat-coral",
  reminder: "bg-stat-orange",
};

const LatestEvents = () => {
  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">Latest Events</h3>
        <Calendar className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className={`w-2 h-2 rounded-full ${typeColors[event.type]}`} />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{event.title}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;
