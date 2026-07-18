import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const TwoFactorModal = ({ onClose }) => (
  <AnimatePresence>
    <motion.div
      className="absolute inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#181919] p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black dark:hover:text-white btn-hover"
          aria-label="Close two-step verification information"
        >
          <X size={26} />
        </button>
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
          Two-step Verification
        </h2>
        <p className="text-gray-500 mb-6">
          Two-step verification is not available in this version. It will remain disabled until server-side verification and sign-in enforcement are implemented.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2 rounded-xl bg-[#2461E6] text-white dark:bg-[#73FBFD] dark:text-black"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

export default TwoFactorModal;
