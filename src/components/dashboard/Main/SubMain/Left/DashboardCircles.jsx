import CircularProgress from "./CircularProgress";

const DashboardCircles = () => {
  const circles = [
    { percentage: 75, color: "#4F6EF7", label: "Tasks" },
    { percentage: 60, color: "#22C55E", label: "Projects" },
    { percentage: 85, color: "#F59E0B", label: "Meetings" },
  ];

  return (
    <div className="chart-container">
      <h3 className="text-sm font-semibold text-foreground mb-4">Progress Overview</h3>
      <div className="flex items-center justify-around">
        {circles.map((circle) => (
          <CircularProgress
            key={circle.label}
            percentage={circle.percentage}
            color={circle.color}
            label={circle.label}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardCircles;
