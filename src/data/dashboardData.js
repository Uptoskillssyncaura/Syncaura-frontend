import {
  LayoutDashboard,
  Folder,
  CheckSquare,
  MessageSquare,
  NotebookText,   // ✅ Meeting
  FileText,
  AlertTriangle,
  Users,
  Clock,
  Umbrella,
  BarChart3,
  Link,
  Settings,
} from "lucide-react";

export const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: "projects", label: "Projects", icon: Folder, path: "/projects" },
  { id: "tasks", label: "Tasks", icon: CheckSquare, path: "/tasks" },
  { id: "chat", label: "Chat", icon: MessageSquare, path: "/chat" },

  // ✅ FIXED
  { id: "meetings", label: "Meetings", icon: NotebookText, path: "/meetings" },

  { id: "documents", label: "Documents", icon: FileText, path: "/documents" },
  { id: "complaints", label: "Complaints", icon: AlertTriangle, path: "/complaints" },
  { id: "notice", label: "Notice", icon: Users, path: "/notice" },
  { id: "attendance", label: "Attendance", icon: Clock, path: "/attendance" },
  { id: "leave", label: "Leave", icon: Umbrella, path: "/leave" },
  { id: "performance", label: "Performance", icon: BarChart3, path: "/performance" },
  { id: "integrations", label: "Integrations", icon: Link, path: "/integrations" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];



export const statsCards = [
  {
  title: "Tasks Due",
  value: "08",
  subtitle: "2 due this week",
  iconType: "folder",
  variant: "due",
}
,
  {
  title: "Unread Messages",
  value: "12",
  subtitle: "4 chats pending",
  iconType: "message",
  variant: "chat",
}
,
  {
  title: "Tasks Due Today",
  value: "12",
  subtitle: "3 High Priority",
  iconType: "task",
  variant: "priority",
}
,
 {
  title: "Pending Requests",
  value: "06",
  subtitle: "Requires approval",
  iconType: "clock",
  variant: "approval",
},
];

export const projectStatusData = [
  { name: "Planning", value: 85, color: "#4F6EF7" },
  { name: "In Progress", value: 40, color: "#22C55E" },
  { name: "Review", value: 75, color: "#F59E0B" },
  { name: "Done", value: 95, color: "#EF4444" },
];

export const productivityData = [
  { day: "Mon", value: 35 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 58 },
  { day: "Sun", value: 65 },
];
