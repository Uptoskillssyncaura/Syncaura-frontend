import React from "react";
import { motion } from "framer-motion";
import { Check, GitPullRequest, MessageSquareText } from "lucide-react";

const activities = [
  {
    icon: <GitPullRequest className="w-5 h-5" />,
    title: (
      <>
        <span className="font-semibold">Merged PR #452</span> into{" "}
        <span className="text-blue-600 dark:text-blue-400">main</span>
      </>
    ),
    time: "2 hours ago",
    color: "bg-blue-500",
  },
  {
    icon: <Check className="w-5 h-5" />,
    title: (
      <>
        <span className="font-semibold">Completed Task:</span> Finalize documentation
      </>
    ),
    time: "5 hours ago",
    color: "bg-green-500",
  },
  {
    icon: (
      <MessageSquareText className="w-5 h-5 fill-white text-gray-400 dark:text-gray-300" />
    ),
    title: (
      <>
        <span className="font-semibold">Sarah Chen</span> commented on Login Refactor
      </>
    ),
    time: "Yesterday",
    color: "bg-gray-400",
  },
];

const RecentActivityCard = () => {
  return (
    <div
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
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">
        Recent Activity
      </h2>

      <div className="relative flex flex-col gap-6">
        {/* Timeline line */}
        <span
          className="
          h-[110%] absolute w-0.5
          bg-[#E3E5EA] dark:bg-[#2A2A2A]
          top-0 left-4 z-5
          "
        />

        {activities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            {/* Icon */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center ${item.color} absolute z-40`}
            >
              <span className="text-white">{item.icon}</span>
            </div>

            {/* Content */}
            <div className="flex flex-col relative left-15">
              <div className="text-gray-800 dark:text-gray-300 text-sm">
                {item.title}
              </div>

              <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                {item.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;