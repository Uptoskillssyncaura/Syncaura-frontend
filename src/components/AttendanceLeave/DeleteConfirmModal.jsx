import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

const DeleteConfirmModal = ({ onClose, onConfirm, leaveData }) => {
  const formattedDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          onClick={onClose}
          className="absolute inset-0 bg-black/40 dark:bg-white/10 backdrop-blur-xs"
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-[#f0f0f0] dark:bg-[#000000] p-6 shadow-2xl"
        >
          {/* Close */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="size-6 text-[#FF0000]" />
              <h1 className="text-xl font-medium text-[#000000] dark:text-[#F8F8F8]">
                Delete Leave Request
              </h1>
            </div>
            <button
              onClick={onClose}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white btn-hover"
            >
              <X className="size-7" />
            </button>
          </div>

          <div className="mt-5 px-1">
            <p className="text-[#575757] dark:text-[#A19C9C] text-sm">
              Are you sure you want to delete this leave request? This action
              cannot be undone.
            </p>

            {leaveData && (
              <div className="mt-4 p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#2E2F2F] border border-[#EDEDED] dark:border-[#575757]">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#000000] dark:text-[#F8F8F8]">
                    {leaveData.type} Leave
                  </span>
                  <span
                    className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                      leaveData.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : leaveData.status === "Pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {leaveData.status}
                  </span>
                </div>
                <p className="text-xs text-[#898888] mt-2">
                  {formattedDate(leaveData.startDate)} —{" "}
                  {formattedDate(leaveData.endDate)}
                </p>
                <p className="text-xs text-[#898888] mt-1 italic">
                  "{leaveData.reason}"
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex cursor-pointer items-center justify-center px-6 py-2 rounded-4xl border border-[#989696] dark:border-[#575757] btn-hover"
            >
              <p className="text-[#575757] dark:text-[#A19C9C] text-sm font-medium">
                Cancel
              </p>
            </button>
            <button
              onClick={onConfirm}
              className="flex cursor-pointer items-center justify-center bg-[#FF0000] hover:bg-[#CC0000] px-6 py-2 rounded-4xl btn-hover transition-colors"
            >
              <p className="text-[#FFFFFF] text-sm font-medium">Delete</p>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;
