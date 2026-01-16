import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CalendarDays } from "lucide-react";

const productivityData = [
  { day: "Mon", value: 35 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 50 },
  { day: "Sat", value: 60 },
  { day: "Sun", value: 65 },
];

const FeatureMenu = ({ data = productivityData }) => {
  return (
    <div
      className="
        w-[530px]
        h-[361px]
        rounded-[12px]

        bg-white dark:bg-[#0F172A]
        border border-black/5 dark:border-white/10

        shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]
        
        p-6
        flex flex-col
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] mt-3 font-semibold text-[#020617] dark:text-[#F1F5F9]">
          Team Productivity
        </h3>

        <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] dark:text-[#94A3B8]">
          
          <span>Last 30 Days</span>
        </div>
      </div>

      {/* CHART */}
      <div className="flex-1 -ml-9 -mb-1 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(148,163,184,0.25)"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              interval={0}
              padding={{ left: 20, right: 20 }}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              domain={[0, 80]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
                color: "#020617",
              }}
              wrapperStyle={{
                outline: "none",
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#6366F1" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FeatureMenu;
