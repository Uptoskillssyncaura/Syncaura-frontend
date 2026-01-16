const TaskStatCard = ({ title, completed, total, color }) => {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-foreground">{title}</span>
        <span className="text-xs text-muted-foreground">
          {completed}/{total}
        </span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{percentage}% complete</p>
    </div>
  );
};

export default TaskStatCard;
