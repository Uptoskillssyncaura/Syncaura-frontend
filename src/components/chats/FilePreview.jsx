import { useState } from "react";
import { IoDocumentText, IoImage, IoClose } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa6";
import { Dot, Download, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FilePreview({ fileUrl, fileName, fileSize, fileDate }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Determine file type
  const extension = fileName?.split('.').pop().toLowerCase() || "";
  const isImage = ["jpg", "jpeg", "png", "gif", "webp"].includes(extension);
  const isPdf = extension === "pdf";

  // Icon rendering
  const renderIcon = () => {
    if (isImage) {
      if (fileUrl) {
        return <img src={fileUrl} alt={fileName} className="size-10 rounded-md object-cover border border-gray-200 dark:border-gray-700" />;
      }
      return <IoImage className="size-10 text-gray-700 dark:text-gray-300" />;
    }
    if (isPdf) {
      return <FaRegFilePdf className="size-10 text-red-500 dark:text-red-400" />;
    }
    return <IoDocumentText className="size-10 fill-gray-700 dark:fill-gray-300" />;
  };

  const handlePreview = () => {
    if (isImage || isPdf) {
      setIsPreviewOpen(true);
    } else {
      alert("Preview not available for this file type.");
    }
  };

  return (
    <>
      <div className="flex items-center gap-3 px-2 py-2 border rounded-xl border-[#989696] dark:border-[#989696] group hover:bg-gray-100 dark:hover:bg-[#3a3b3b] transition-colors relative">
        {renderIcon()}

        <div className="flex flex-col gap-0.5 flex-1 min-w-0 pr-16">
          <h1 className="text-sm text-[#222222] dark:text-[#FFFFFF] truncate">
            {fileName}
          </h1>

          <div className="flex items-center gap-1">
            {fileSize && <p className="text-[#989696] text-xs">{fileSize}</p>}
            {fileDate && (
              <div className="flex items-center">
                <Dot className="text-[#989696] text-xl -ml-1 -mr-1" />
                <span className="text-[#989696] text-xs">{fileDate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="absolute right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 dark:bg-[#3a3b3b]/80 backdrop-blur-sm rounded-lg p-1">
          {(isImage || isPdf) && (
            <button
              onClick={handlePreview}
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors"
              title="Preview"
            >
              <Eye size={16} />
            </button>
          )}
          {fileUrl && (
            <a
              href={fileUrl}
              download={fileName}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors"
              title="Download"
            >
              <Download size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="absolute inset-0 bg-black"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#2E2F2F] rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate pr-4">
                  {fileName}
                </h2>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors flex-shrink-0"
                >
                  <IoClose size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 flex items-center justify-center min-h-[50vh] bg-gray-50 dark:bg-black/20">
                {isImage && (
                  <img
                    src={fileUrl}
                    alt={fileName}
                    className="max-w-full max-h-[70vh] object-contain rounded"
                  />
                )}
                {isPdf && (
                  <iframe
                    src={`${fileUrl}#toolbar=0`}
                    title={fileName}
                    className="w-full h-[70vh] rounded border-0"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
