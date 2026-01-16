import { Plus, FileText, Users, Calendar } from "lucide-react";

const actions = [
  { id: "new-project", label: "New Project", icon: Plus, color: "bg-stat-blue" },
  { id: "create-task", label: "Create Task", icon: FileText, color: "bg-stat-green" },
  { id: "invite-team", label: "Invite Team", icon: Users, color: "bg-stat-orange" },
  { id: "schedule", label: "Schedule", icon: Calendar, color: "bg-stat-purple" },
];

const QuickActions = () => {
  return (
    <div className="chart-container">
      <h3 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left"
            >
              <div className={`p-2 rounded-lg ${action.color} text-primary-foreground`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-foreground">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
