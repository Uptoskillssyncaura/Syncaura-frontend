const ProgressBar = ({ label, value, maxValue = 100, color }) => {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-xs font-medium text-foreground">{value}</span>
      </div>
      <div className="w-full h-20 bg-secondary rounded-lg overflow-hidden flex flex-col-reverse">
        <div
          className="w-full rounded-lg transition-all duration-500"
          style={{ height: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
