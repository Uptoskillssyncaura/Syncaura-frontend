import {
  Check,
  CircleAlert,
  ClipboardListIcon,
  EllipsisIcon,
} from "lucide-react";
import TopCard from "../TopCard";
import CircularProgress from "../CircularProgress";
import TaskStatusDistribution from "../TaskGraph/TaskStatusDistribution";
import { TASK_STATUS } from "../../../constant/constant";
import SprintContribution from "../subpages/Dashboard/SprintContribution";
import { motion } from "framer-motion";
import Deadlines from "../subpages/Dashboard/Deadlines";
import { IoAlert } from "react-icons/io5";
import RecentActivityCard from "../RecentActivityCard";

const Dashboard = () => {
  const CONTRIBUTIONS = [
    {
      id: "dev",
      title: "DEV",
      subtitle: "QA",
      value: 75,
      lightColor: "bg-[#137FEC]",
      darkColor: "dark:bg-blue-400",
    },
    {
      id: "doc",
      title: "DOC",
      subtitle: "UAT",
      value: 45,
      lightColor: "bg-[#A1CCF7]",
      darkColor: "dark:bg-blue-300",
    },
  ];

  const deadlineTask = [
    {
      title: "API Auth Bug",
      status: "HIGH",
      due: "Due Today, 5:00 PM",
      bgColor: "bg-[#FEF2F2]",
      borderColor: "border-[#FCC0C4]",
      titleColor: "text-[#B60000]",
      descColor: "text-[#E76060]",
      statusColor: "bg-[#EF4444]",
    },
    {
      title: "UAT Testing",
      status: "MEDIUM",
      due: "Tomorrow, 10:00 AM",
      bgColor: "bg-[#FEFCE8]",
      borderColor: "border-[#FFF7A6]",
      titleColor: "text-[#9F5E00]",
      descColor: "text-[#DBAE4B]",
      statusColor: "bg-[#EAB308]",
    },
    {
      title: "Refactor Login",
      status: "LOW",
      due: "Apr 24, 2024",
      bgColor: "bg-[#F6F7F8]",
      borderColor: "border-[#C8E3FE]",
      titleColor: "text-[#000000]",
      descColor: "text-[#8897A5]",
      statusColor: "bg-[#6B7280]",
    },
  ];
  const cardData = [
    {
      title: "Total Tasks",
      count: 24,
      iconData: (
        <ClipboardListIcon className="text-white dark:text-gray-900 fill-blue-600 size-10" />
      ),
    },
    {
      title: "Completed",
      count: 12,
      iconData: (
        <div className="flex items-center justify-center p-2 rounded-full bg-[#1BC963] ">
          <Check className="size-5 text-white dark:text-gray-900" />
        </div>
      ),
    },
    {
      title: "in Progress",
      count: 8,
      iconData: (
        <div className="flex items-center justify-center p-2 rounded-full bg-[#FBB309] ">
          <EllipsisIcon className="size-5 text-white dark:text-gray-900" />
        </div>
      ),
    },
    {
      title: "Overdue",
      count: 4,
      iconData: (
        <CircleAlert className="size-10 text-white dark:text-gray-900 fill-[#EF4444]" />
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full ">
        {cardData.map((item) => (
          <div key={item.title} className="w-full flex justify-center">
            <TopCard
              title={item.title}
              count={item.count}
              IconData={item.iconData}
            />
          </div>
        ))}
      </div>
      <div
        className="flex flex-col w-full gap-4 sm:gap-5 shadow-[0_0_10px_0_#54545440] 
                py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10 rounded-xl"
      >
        <div className="flex items-center justify-start w-full">
          <h1 className="text-[#6E7184] font-bold text-xl sm:text-2xl">
            Health Status
          </h1>
        </div>

        <div
          className="flex flex-col xsm:flex-row items-center md:items-center 
               justify-center md:justify-start w-full 
               gap-6 sm:gap-10 md:gap-20 
               px-2 sm:px-6 md:px-10 py-2"
        >
          <div className="flex justify-center w-full xsm:w-auto">
            <CircularProgress
              percentage={60}
              startAngle={20}
              size={160}
              className="sm:size-[180px] md:size-[200px]"
              label="PROJECTS"
              data={12}
              fontSize={32}
              textSize={14}
              textColor="#565C6A"
              labelColor="#BEC3CE"
            />
          </div>

          <div className="flex flex-col items-center md:items-start justify-center gap-2 text-center md:text-left">
            <h1 className="text-[#8C8C8C] font-semibold text-base sm:text-lg">
              Spiral Goal Progress
            </h1>

            <div className="flex items-center gap-3">
              <h1 className="text-black font-bold text-xl sm:text-2xl">+5%</h1>

              <div className="flex items-center justify-center px-2 py-1 rounded-xl bg-[#E8F9EF]">
                <p className="text-[#37CB6F] font-bold text-[9px] sm:text-[10px] tracking-wide">
                  UP FROM LAST WEEK
                </p>
              </div>
            </div>

            <h1 className="text-[#C9D0D6] font-bold text-xs sm:text-sm tracking-widest">
              Target: 80% by Friday
            </h1>
          </div>
        </div>
      </div>
      <SprintContribution CONTRIBUTIONS={CONTRIBUTIONS} />

      <div className="flex items-center justify-start w-full shadow-[0_0_10px_0_#54545440] py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10 ">
        <TaskStatusDistribution task={TASK_STATUS} />
      </div>
       <div className="flex flex-col items-center justify-start w-full gap-y-7 shadow-[0_0_10px_0_#54545440] py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10  ">
        <RecentActivityCard/>
       </div>
      <div className="flex flex-col items-center justify-start w-full gap-y-7 shadow-[0_0_10px_0_#54545440] py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10 ">
        <div className="flex items-center justify-between w-full ">
          <h1 className="text-[#6E7184] font-bold text-2xl">
            Upcoming Deadlines
          </h1>
          <motion.p
            whileHover={{
              scale: 1.08,
              x: 6,
              textShadow: "0px 4px 12px rgba(192,83,40,0.45)",
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="
    text-[#C05328]
    text-lg
    font-medium
    cursor-pointer
    hover:underline
  "
          >
            View All
          </motion.p>
        </div>
        <div
          className="
  flex
  flex-wrap
  gap-4
  md:gap-5
  page-2xl:gap-10
  px-4
  sm:px-0
  page-2xl:px-20
  w-full
  justify-start
"
        >
          {deadlineTask.map((item, idx) => (
            <Deadlines
              key={idx}
              title={item.title}
              descColor={item.descColor}
              status={item.status}
              due={item.due}
              bgColor={item.bgColor}
              borderColor={item.borderColor}
              titleColor={item.titleColor}
              statusColor={item.statusColor}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-y-7 shadow-[0_0_10px_0_#54545440] py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10 ">
        <div className="flex items-center justify-between w-full ">
          <h1 className="text-[#6E7184] font-bold text-2xl">
            Issues & Alerts
          </h1>
          <motion.p
            whileHover={{
              scale: 1.08,
              x: 6,
              textShadow: "0px 4px 12px rgba(192,83,40,0.45)",
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="
    text-[#C05328]
    text-lg
    font-medium
    cursor-pointer
    hover:underline
  "
          >
            View All
          </motion.p>
        </div>
        <div
          className="
  flex
  flex-wrap
  gap-4
  md:gap-5
  page-2xl:gap-10
  px-4
  sm:px-0
  page-2xl:px-20
  w-full
  justify-center xl:justify-start
"
        >
          <div className="grid py-3 max-w-[400px] bg-[#E7F2FD] border border-[#BDDEFF] rounded-lg px-5 grid-cols-5">
            <div className="col-span-1 flex items-center justify-center  ">
              <IoAlert className="size-8 text-[#007CEC]" />
            </div>
            <div className="col-span-4 flex-col items-start justify-center">
              <p className="text-[#007CEC] text-base font-semibold" >Priority Focus: APi Documentation</p>
              <p className="text-[#AAD2E0] text-xs font-medium " >Pending compigtign before sprint end. Curtent procress 40%</p>
              <p className="text-[#007CEC] font-semibold text-sm " >Resume Work →</p>
            </div>
          </div>
           <div className="grid py-3 max-w-[400px] bg-[#FDECEC] border border-[#FFC6C6] rounded-lg px-5 grid-cols-5">
            <div className="col-span-1 flex items-center justify-center  ">
              <IoAlert className="size-8 text-[#EE1C1C]" />
            </div>
            <div className="col-span-4 flex-col items-start justify-center">
              <p className="text-[#EE1C1C] text-base font-semibold" >BLOCKED: User Dashboard UI</p>
              <p className="text-[#F03131] text-xs font-medium " >Awaiting UX  Specs from design team regarding mobile layouts</p>
              <p className="text-[#EE1C1C] font-semibold flex items-center justify-center text-center text-sm " >Nudge Designer</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
