import ProjectItem from "./ProjectItem";

const projects = [
  { name: "Website Redesign", progress: 75, dueDate: "Jan 15", status: "on-track" },
  { name: "Mobile App v2.0", progress: 45, dueDate: "Jan 20", status: "at-risk" },
  { name: "API Integration", progress: 90, dueDate: "Jan 10", status: "on-track" },
  { name: "Dashboard Analytics", progress: 30, dueDate: "Jan 25", status: "delayed" },
];

const ProjectListItem = () => {
  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">Active Projects</h3>
        <button className="text-xs text-primary hover:underline">View All</button>
      </div>
      <div className="space-y-1">
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectListItem;
