import { motion } from "framer-motion";

const contributions = [
  { title: "Mobile App Launch", value: 75 },
  { title: "Enterprise CRM Integration", value: 40 },
  { title: "Internal HR Portal Update", value: 90 },
  { title: "Marketing Website Localization", value: 15 },
];

export default function ProjectContributionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-[#141517] text-white rounded-xl p-6 border border-[#2d2f31]"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-white">My Individual Contribution</h2>
        <button className="text-xs text-[#00D2FF] font-bold tracking-tight hover:underline">
          View Detailed Log
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {contributions.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">{item.title}</span>
              <span className="text-[#00D2FF] text-sm font-bold">{item.value}%</span>
            </div>

            {/* Thinner, dark track for neon effect */}
            <div className="w-full h-1.5 bg-[#2d2f31] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-[#00D2FF] rounded-full shadow-[0_0_8px_rgba(0,210,255,0.4)]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}