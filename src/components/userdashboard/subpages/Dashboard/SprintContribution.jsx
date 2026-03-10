import { motion } from "framer-motion";
import ContributionCard from "./ContributionCard";
// import { CONTRIBUTIONS } from "./contributions.config";

const SprintContribution = ({CONTRIBUTIONS}) => {
  return (
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="
    w-full 
    p-5 
    rounded-2xl 
    bg-white 
    dark:bg-[#1E1E1E]
    shadow-[0_0_12px_#00000020]
    dark:shadow-[0_0_12px_#00000080] 
  "
>
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Sprint Contribution
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-6 sm:gap-10 xl:px-20">
        {CONTRIBUTIONS.map((item) => (
          <ContributionCard key={item.id} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default SprintContribution;