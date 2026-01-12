import { Edit2, Eye, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = [
    {
      id: "#1021",
      title: "Design Homepage",
      status: "In Progress",
      date: "09 Dec 2025",
    },
    {
      id: "#1022",
      title: "Prepare Document",
      status: "Completed",
      date: "07 Dec 2025",
    },
    { id: "#1023", title: "Fix Bug", status: "Overdue", date: "08 Dec 2025" },
    {
      id: "#1024",
      title: "Client Feedback",
      status: "In Progress",
      date: "10 Dec 2025",
    },
    {
      id: "#1025",
      title: "Deploy Project",
      status: "On Hold",
      date: "13 Dec 2025",
    },
  ];

  // Dynamic badge color
  const statusColor = {
    Completed: "bg-green-200 text-green-700",
    Pending: "bg-yellow-200 text-yellow-700",
    "In Progress": "bg-blue-200 text-blue-700",
    "In Review": "bg-purple-200 text-purple-700",
    "On Hold": "bg-red-200 text-red-700",
    Overdue: "bg-red-100 text-red-800",
  };
  const iconBgColor = {
    Completed: "bg-green-100/70 text-green-700",
    Pending: "bg-yellow-100/70 text-yellow-700",
    "In Progress": "bg-blue-100/70 text-blue-700",
    "In Review": "bg-purple-100/70 text-purple-700",
    "On Hold": "bg-red-100/70 text-red-700",
    Overdue: "bg-red-100/70 text-red-500",
  };
  const statusIcon = {
    Completed: <Eye className="text-green-700 size-5" />,

    "In Progress": <Edit2 className="text-blue-600 size-5" />,

    Overdue: <TriangleAlert className="text-red-700 size-5" />,
  };

  return (
    <div
      className="w-full   shadow-[0_4px_4px_2px_rgba(0,0,0,0.40)] rounded-xl 
                    flex flex-col gap-8 pt-6 pb-10 px-3 sm:px-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-black text-lg font-bold">My Task List</h2>

        <Link to="/tasks">
          <h2
            className="relative text-blue-500 font-semibold text-sm md:text-lg cursor-pointer
                         after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500
                         after:transition-all after:duration-300 hover:after:w-full"
          >
            View All
          </h2>
        </Link>
      </div>

      {/* Table Header */}
      <div
        className="hidden sm:grid grid-cols-4 text-[14px] font-semibold text-gray-600 uppercase
                      border-b pb-1 min-w-full "
      >
        <p className="text-left">Task Name</p>
        <p className="text-center">Status</p>
        <p className="text-center">Due Date</p>
        <p className="text-right">Actions</p>
      </div>

      {/* Task Rows */}
      <div className="flex flex-col gap-3">
        {tasks.slice(0, 4).map((item, index) => (
          <>
            <div
              key={index}
              className="hidden sm:grid grid-cols-4 gap-3 bg-gray-50 p-4 rounded-xl 
                       shadow-[0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                       transition-shadow duration-200"
            >
              {/* Task Info */}
              <div className="flex flex-col">
                <h2 className="text-[15px] font-bold text-black">
                  {item.title}
                </h2>
                <h3 className="text-[13px] text-gray-500 font-medium">
                  ID : {item.id}
                </h3>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center">
                <span
                  className={`px-3 py-1 w-23 md:w-28 flex items-center justify-center rounded-full text-xs font-bold ${
                    statusColor[item.status]
                  } md:text-sm `}
                >
                  {item.status}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center justify-center">
                <p className="text-[14px]  font-medium text-black">
                  {item.date}
                </p>
              </div>

              {/* Action */}
              <div className="flex items-center justify-end">
                <div className={`p-2 ${iconBgColor[item.status]}  rounded-md`}>
                  {statusIcon[item.status]}
                </div>
              </div>
            </div>
            <div
              key={index}
              className="flex flex-col items-center justify-start   sm:hidden bg-gray-50 p-4 rounded-xl 
                       shadow-[0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                       transition-shadow duration-200 gap-5"
            >
              <div className="flex items-start justify-start gap-3 w-full">
                <h2 className="text-black flex-2/5 font-bold">Task Name</h2>
                <div className="flex flex-col flex-3/5">
                  <h2 className="text-[15px] font-bold text-black">
                    {item.title}
                  </h2>
                  <h3 className="text-[13px] text-gray-500 font-medium">
                    ID : {item.id}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 w-full">
                <h2 className="text-black flex-2/5 font-bold">Status</h2>
                <div className="flex flex-col flex-3/5">
                  <div className="flex items-center justify-start">
                    <span
                      className={`px-3 py-1 w-23 md:w-28 flex items-center justify-center rounded-full text-xs font-bold ${
                        statusColor[item.status]
                      } md:text-sm `}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 w-full">
                <h2 className="text-black flex-2/5 font-bold">Date</h2>
                <div className="flex flex-col flex-3/5">
                  <div className="flex items-center justify-start">
                    <p className="text-[14px]  font-medium text-black">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 w-full">
                <h2 className="text-black flex-2/5 font-bold">Action</h2>
                <div className="flex flex-col flex-3/5">
                  <div className="flex items-center justify-start">
                    <div
                      className={`p-2 ${iconBgColor[item.status]}  rounded-md`}
                    >
                      {statusIcon[item.status]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
