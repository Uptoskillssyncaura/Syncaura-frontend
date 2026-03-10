import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Filter, 
  Download, 
  Dot, 
  Smartphone, 
  Database, 
  Globe, 
  ShieldCheck, 
  LayoutDashboard, 
  CreditCard 
} from "lucide-react";

const PAGE_SIZE = 4;

const projectsData = [
  { 
    id: 1, 
    name: "Mobile Banking App", 
    role: "UI LEAD", 
    tasks: "5/8", 
    progress: 75, 
    sprint: "Q3 Sprint 4", 
    status: "On Track", 
    icon: Smartphone, 
    roleStyles: "text-[#00d2ff] border-[#00d2ff]/50 bg-[#00d2ff]/10" 
  },
  { 
    id: 2, 
    name: "CMR Integration", 
    role: "DEV", 
    tasks: "2/12", 
    progress: 40, 
    sprint: "Q3 Sprint 3", 
    status: "Delayed", 
    icon: Database, 
    roleStyles: "text-[#c084fc] border-[#c084fc]/50 bg-[#c084fc]/10" 
  },
  { 
    id: 3, 
    name: "Global Site Localization", 
    role: "REVIEWER", 
    tasks: "1/15", 
    progress: 15, 
    sprint: "Q4 Planning", 
    status: "At Risk", 
    icon: Globe, 
    roleStyles: "text-[#94a3b8] border-[#94a3b8]/50 bg-[#94a3b8]/10" 
  },
  { 
    id: 4, 
    name: "HR Security Audit", 
    role: "CONSULTANT", 
    tasks: "18/20", 
    progress: 90, 
    sprint: "Q3 Sprint 4", 
    status: "Complete", 
    icon: ShieldCheck, 
    roleStyles: "text-[#38bdf8] border-[#38bdf8]/50 bg-[#38bdf8]/10" 
  },
  { 
    id: 5, 
    name: "Marketing Dashboard", 
    role: "UI LEAD", 
    tasks: "6/10", 
    progress: 60, 
    sprint: "Q4 Sprint 1", 
    status: "On Track", 
    icon: LayoutDashboard, 
    roleStyles: "text-[#00d2ff] border-[#00d2ff]/50 bg-[#00d2ff]/10" 
  },
  { 
    id: 6, 
    name: "Payment Gateway", 
    role: "DEV", 
    tasks: "3/14", 
    progress: 25, 
    sprint: "Q4 Sprint 2", 
    status: "At Risk", 
    icon: CreditCard, 
    roleStyles: "text-[#c084fc] border-[#c084fc]/50 bg-[#c084fc]/10" 
  },
];

const statusStyles = {
  "On Track": "bg-[#064e3b]/30 text-[#4ade80] border border-[#064e3b]",
  "Delayed": "bg-[#451a03]/30 text-[#fbbf24] border border-[#78350f]",
  "At Risk": "bg-[#450a0a]/30 text-[#f87171] border border-[#7f1d1d]",
  "Complete": "bg-[#065f46]/40 text-[#10b981] border border-[#059669]",
};

export default function ActiveEngagementTable() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const filteredData = useMemo(() => {
    if (filter === "All") return projectsData;
    return projectsData.filter((p) => p.status === filter);
  }, [filter]);

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const paginatedData = filteredData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleExport = () => {
    const csv = filteredData.map((p) => [p.name, p.role, p.tasks, p.progress, p.sprint, p.status].join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "projects.csv";
    a.click();
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#141517] text-white rounded-xl shadow-2xl border border-[#2d2f31] overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 border-b border-[#2d2f31]">
          <h2 className="text-xl font-semibold text-white">Active Engagement Table</h2>
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setShowFilter((v) => !v)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#242628] border-[#3e4042] border rounded-md text-white text-sm hover:bg-[#2d2f31]"
            >
              <Filter size={14} /> Filter
            </button>

            {showFilter && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-10 z-20 bg-[#1a1c1e] border border-[#3e4042] rounded-lg shadow-xl w-40"
              >
                {["All", "On Track", "Delayed", "At Risk", "Complete"].map((item) => (
                  <button
                    key={item}
                    onClick={() => { setFilter(item); setPage(1); setShowFilter(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2d2f31] ${filter === item ? "text-white font-bold" : "text-gray-400"}`}
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}

            <button
              onClick={handleExport}
              className="flex items-center bg-[#242628] border-[#3e4042] text-white gap-2 px-3 py-1.5 border rounded-md text-sm hover:bg-[#2d2f31]"
            >
              <Download size={14} /> Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="bg-[#1a1c1e] border-b border-[#2d2f31] text-[#94a3b8] uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Project Name</th>
                <th className="px-6 py-4 text-left font-medium">Role</th>
                <th className="px-6 py-4 text-left font-medium">My Tasks</th>
                <th className="px-6 py-4 text-left font-medium">My Progress</th>
                <th className="px-6 py-4 text-left font-medium">Sprint</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2d2f31]">
              <AnimatePresence mode="wait">
                {paginatedData.map((item) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-[#1c1e21] transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-[#242628] rounded border border-[#3e4042]">
                           <item.icon size={16} className="text-[#00d2ff]" />
                        </div>
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/* Line 139: Updated Role Badge with dynamic styles */}
                      <div className={`inline-flex items-center justify-center px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-tight ${item.roleStyles}`}>
                        {item.role}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#94a3b8] font-medium">{item.tasks}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-[#2d2f31] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            className="h-full bg-[#00d2ff] shadow-[0_0_8px_rgba(0,210,255,0.5)]"
                          />
                        </div>
                        <span className="text-[#94a3b8] text-xs font-medium">{item.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#94a3b8]">{item.sprint}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full flex items-center w-fit gap-1 text-[11px] font-bold ${statusStyles[item.status]}`}>
                        <Dot className="size-4" /> {item.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4 border-t border-[#2d2f31] text-xs bg-[#141517]">
          <span className="text-[#697d92]">
            Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filteredData.length)} of {filteredData.length} projects
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-1.5 border border-[#2d2f31] rounded text-gray-300 disabled:opacity-30 hover:bg-[#2d2f31] transition-all"
            >
              Previous
            </button>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-1.5 border border-[#2d2f31] rounded text-gray-300 disabled:opacity-30 hover:bg-[#2d2f31] transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}