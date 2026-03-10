import { motion } from "framer-motion";
import {
  Check,
  CircleAlert,
  Clock,
  EllipsisIcon,
  MoreHorizontal,
} from "lucide-react";
import { useMemo, useState } from "react";

const tasks = [
  {
    id: 1,
    name: "Implement OAuth Login",
    project: "Auth-Service",
    status: "In Progress",
    priority: "HIGH",
    dueDate: "2026-01-27",
    sprint: "Sprint 24",
  },
  {
    id: 2,
    name: "Update Documentation",
    project: "Core-API",
    status: "To Do",
    priority: "LOW",
    dueDate: "2026-02-10",
    sprint: "Sprint 25",
  },
  {
    id: 3,
    name: "Bug: Header alignment on Mobile",
    project: "Frontend-UI",
    status: "Blocked",
    priority: "MEDIUM",
    dueDate: "2026-01-24",
    sprint: "Sprint 24",
  },
  {
    id: 4,
    name: "Setup CI/CD Pipeline",
    project: "DevOps",
    status: "Done",
    priority: "HIGH",
    dueDate: "2026-01-20",
    sprint: "Sprint 23",
  },
  {
    id: 5,
    name: "Create Notification Service",
    project: "Backend",
    status: "In Progress",
    priority: "MEDIUM",
    dueDate: "2026-01-29",
    sprint: "Sprint 24",
  },
  {
    id: 6,
    name: "Refactor Auth Middleware",
    project: "Core-API",
    status: "To Do",
    priority: "LOW",
    dueDate: "2026-02-05",
    sprint: "Sprint 25",
  },
];

const statusStyles = {
  "In Progress": "bg-blue-100 text-blue-600 dark:bg-blue-500/20",
  "To Do": "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20",
  Blocked: "bg-red-100 text-red-600 dark:bg-red-500/20",
  Done: "bg-green-100 text-green-600 dark:bg-green-500/20",
};

const priorityStyles = {
  HIGH: "bg-red-100 text-red-600",
  MEDIUM: "bg-orange-100 text-orange-600",
  LOW: "bg-gray-100 text-gray-600",
};

const isDueSoon = (date) => {
  const today = new Date();
  const due = new Date(date);
  const diff = (due - today) / (1000 * 60 * 60 * 24);
  return diff <= 5;
};

const statusIcon = {
  "In Progress": (
    <div className="flex items-center justify-center p-0.5 rounded-full bg-[#137FEC] ">
      <EllipsisIcon className="size-3 text-white dark:text-gray-900" />
    </div>
  ),
  "To Do": (
    <div className="flex items-center justify-center size-4 rounded-full bg-[#E9B000] " />
  ),
  Blocked: (
    <CircleAlert className="size-5 text-white dark:text-gray-900 fill-[#EF4444]" />
  ),
  Done: (
    <div className="flex items-center justify-center p-0.5 rounded-full bg-[#1BC963] ">
      <Check className="size-3 text-white dark:text-gray-900" />
    </div>
  ),
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

export default function TasksTable() {
  const [page, setPage] = useState(1);
  const perPage = 4;

  const rows = useMemo(
    () => tasks.slice((page - 1) * perPage, page * perPage),
    [page],
  );
  const totalPages = Math.ceil(tasks.length / perPage);

  return (
    <div className="w-full overflow-x-auto rounded-xl bg-[#1E1E1E] shadow">
      <h2 className="px-6 py-4 text-2xl font-bold text-[#6E7184] dark:text-gray-100">
        Tasks
      </h2>

      <table className="min-w-[1000px] w-full text-sm">
        <thead className="bg-[#2A2A2A] dark:bg-gray-800 border-t border-b border-[#EFF4F8]">
          <tr className="text-left text-[#697D92] dark:text-gray-400 uppercase ">
            <th></th>
            <th className="py-3">Task Name</th>
            <th className="py-3">Project</th>
            <th className="py-3">Status</th>
            <th className="py-3">Priority</th>
            <th className="py-3">Due Date</th>
            <th className="py-3">Sprint</th>
            <th className="text-center py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((task, i) => (
            <motion.tr
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
              className="border-b last:border-none dark:border-gray-700"
            >
              <td className="p-4">
                <input
                  type="checkbox"
 className="w-4 h-4 appearance-none border-2 border-gray-500 bg-[#1E1E1E] rounded cursor-pointer relative checked:bg-green-600 checked:border-green-600 before:content-[''] before:absolute before:w-[5px] before:h-[9px] before:border-white before:border-r-2 before:border-b-2 before:rotate-45 before:left-[4px] before:top-[1px] before:opacity-0 checked:before:opacity-100"
                />
              </td>
              <td className="font-medium text-gray-800 dark:text-gray-100">
                {task.name}
              </td>
              <td className="text-gray-600 dark:text-gray-300">
                {task.project}
              </td>
              <td className="flex">
                <div
                  className={`flex items-center gap-2 justify-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[task.status]}`}
                >
                  {statusIcon[task.status]}
                  <h2>{task.status}</h2>
                </div>
              </td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityStyles[task.priority]}`}
                >
                  {task.priority}
                </span>
              </td>
              <td
                className={`flex items-center gap-1 mt-4 ${
                  isDueSoon(task.dueDate)
                    ? "text-red-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {isDueSoon(task.dueDate) && <Clock size={14} />}
                {formatDate(task.dueDate)}
              </td>
              <td className="text-gray-600 dark:text-gray-300">
                {task.sprint}
              </td>
              <td className="text-center">
                <MoreHorizontal className="mx-auto text-gray-400" />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      <div className="flex bg-[#2E2E2E] items-center justify-between px-6 py-2 text-sm text-gray-600 dark:text-gray-300">
        <span>
          Showing {(page - 1) * perPage + 1}–
          {Math.min(page * perPage, tasks.length)} of {tasks.length} tasks
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded-md border disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-md border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}