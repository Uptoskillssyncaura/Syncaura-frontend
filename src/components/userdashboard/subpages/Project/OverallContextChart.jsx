import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const data = [
  { name: "Active", value: 65, color: "#1E78FF" },
  { name: "At Risk", value: 10, color: "#EF4444" },
  { name: "Completed", value: 25, color: "#22C55E" },
  { name: "Upcoming", value: 0, color: "#E6E8EA" },
];

const SUCCESS_RATE = 82;

const OverallContextChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem =
    activeIndex !== null ? data[activeIndex] : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white rounded-xl p-4 "
    >
      <h2 className="text-2xl font-bold text-[#000000] mb-1">
        Overall Context
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6">

        <div className="w-full md:w-[220px] h-[220px] relative flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}
                outerRadius={90}
                activeIndex={activeIndex}
                activeOuterRadius={100}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              {activeItem ? (
                <motion.div
                  key={activeItem.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  className="text-center"
                >
                  <p className="text-sm font-medium text-gray-500">
                    {activeItem.name}
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: activeItem.color }}
                  >
                    {activeItem.value}%
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-[#565C6A]">
                    {SUCCESS_RATE}%
                  </p>
                  <p className="text-xs font-bold text-[#BEC3CE] uppercase">
                    Success Rate
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {data.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="flex items-center gap-4 text-sm cursor-pointer"
            >
              <span
                className="size-5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex flex-col items-start justify-center ">
                <span className="text-gray-600">{item.name}</span>
              <span className="text-gray-400">({item.value}%)</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OverallContextChart;
