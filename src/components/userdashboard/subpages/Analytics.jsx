import { Check, CircleAlert, ClipboardListIcon, EllipsisIcon, FolderClosedIcon } from 'lucide-react'
import React from 'react'
import TopCard from '../TopCard'
import CircularProgress from '../CircularProgress'
import TaskStatusDistribution from '../TaskGraph/TaskStatusDistribution'
import { ANALYTICS_TASK_STATUS } from '../../../constant/constant'
import TasksTable from './Analytics/TasksTable'

const Analytics = () => {
  const cardData=[
    {
      title: "Total Tasks",
      count: 24,
      iconData: <ClipboardListIcon className='text-white dark:text-gray-900 fill-blue-600 size-10' />
    },
    {
      title: "Completed",
      count: 12,
      iconData: <div className="flex items-center justify-center size-9 rounded-full bg-[#E9B000] ">
      </div>
    },
    {
      title: "in Progress",
      count: 8,
      iconData: <div className="flex items-center justify-center p-1 rounded-full bg-[#137FEC] ">
        <EllipsisIcon className='size-7 text-white dark:text-gray-900' />
      </div>
    },
    {
      title: "Blocked",
      count: 3,
      iconData:
        <CircleAlert className='size-10 text-white dark:text-gray-900 fill-[#EF4444]' />
    
    },
    {
      title: "Done",
      count: 19,
      iconData: <div className="flex items-center justify-center p-2 rounded-full bg-[#1BC963] ">
        <Check className='size-5 text-white dark:text-gray-900' /> </div>,
      
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-8 ">
      <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 w-full ">
        {cardData.map((item) => (
          <div key={item.title} className="w-full flex justify-center">
            <TopCard
            titleColor={"text-[#536782]"}
            countColor={"text-[#000000]"}
              title={item.title}
              count={item.count}
              IconData={item.iconData}
            />
          </div>
        ))}
      </div>
    <div className="flex flex-col w-full gap-6 bg-[#141517] border border-[#2d2f31] py-8 px-6 md:px-10 rounded-xl">

  <div className="flex items-center justify-start w-full">
    <h1 className="text-[#FFFFFF] font-bold text-xl sm:text-2xl">
      My Completion Progress
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
        percentage={(19/25) * 100}
        startAngle={-90}
        size={180}
        className="sm:size-[180px] md:size-[200px]"
        label="FINISHED"
        fontSize={32}
        textSize={14}
        textColor="#FFFFFF"
        labelColor="#BEC3CE"
      />
    </div>

    <div className="flex items-center justify-center">
      <h1 className='text-[#636679] font-bold text-xl ' >You’ve completed <span className='text-blue-500'>19</span> of <span className='text-blue-500'>25</span> tasks this sprint</h1>
      
    </div>
  </div>
</div>
 <div className="flex items-center justify-start w-full shadow-[0_0_10px_0_#54545440] py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10 ">
          <TaskStatusDistribution task={ANALYTICS_TASK_STATUS} percentage={true} showTotal={false} />
        </div>
<TasksTable/>
    </div>
  );
}

export default Analytics