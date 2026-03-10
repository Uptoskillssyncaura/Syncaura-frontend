import { TrendingUp } from "lucide-react";
import StatusBar from "./StatusBar";
import StatusLegend from "./StatusLegend";

export default function TaskStatusDistribution({
  task,
  showTotal = true,
  percentage = false,
}) {
  const total = percentage ? null : task.reduce((sum, s) => sum + s.count, 0);

  return (
    <div
      className="
      w-full relative space-y-5
      bg-white dark:bg-[#1E1E1E]
      border border-gray-200 dark:border-[#1F2937]
      rounded-2xl
      px-4 py-5
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-xl font-semibold
                       text-gray-800 dark:text-gray-200">
          Status Distibution
        </h1>

        <div className="hidden xsm:flex flex-col items-end gap-3">
          {showTotal && (
            <p className="text-sm font-semibold
                          text-gray-800 dark:text-gray-200">
              {total} Active Tasks
            </p>
          )}
          <StatusLegend data={task} />
        </div>
      </div>

      {/* Bar */}
      <div className="w-full">
        <StatusBar data={task} total={total} />
      </div>

      {/* Velocity */}
      {!showTotal && (
        <div className="flex items-center justify-between mt-3">
          <h1 className="text-sm text-gray-600 dark:text-gray-400">
            Velocity compared to last week
          </h1>

          <div
            className="
            flex items-center gap-1 px-2 py-1 rounded-lg
            bg-green-100 dark:bg-green-900/30
            "
          >
            <TrendingUp className="size-4 text-green-600 dark:text-green-400" />
            <p className="text-green-600 dark:text-green-400 text-xs font-semibold">
              +12%
            </p>
          </div>
        </div>
      )}

      {/* Mobile */}
      <div className="flex xsm:hidden flex-col gap-3 mt-3">
        {showTotal && (
          <p className="text-sm font-semibold
                        text-gray-800 dark:text-gray-200">
            {total} Active Tasks
          </p>
        )}
        <StatusLegend data={task} />
      </div>
    </div>
  );
}