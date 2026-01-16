import { MoreHorizontal } from "lucide-react";

const statusColors = {
  "on-track": "text-stat-green",
  "at-risk": "text-stat-orange",
  delayed: "text-stat-coral",
};

const statusLabels = {
  "on-track": "On Track",
  "at-risk": "At Risk",
  delayed: "Delayed",
};

const ProjectItem = ({ name, progress, dueDate, status }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">{name}</p>
        <p className="text-xs text-muted-foreground">Due: {dueDate}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-16">
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-1">{progress}%</p>
        </div>
        <span className={`text-xs font-medium ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
        <button className="p-1 hover:bg-secondary rounded">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
