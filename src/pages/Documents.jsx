import { Download, FileText, ListFilter, Plus, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import TableRow from "../components/Document/TableRow";
import DocumentModal from "../components/Document/DocumentModel";
import VersionHistoryDrawer from "../components/Document/DetailAboutDcument/VersionHistoryDrawer";
import { AnimatePresence, motion } from "framer-motion";
import DocumentFilter from "../components/Document/DocumentFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../redux/thunks/documentThunks";

export default function Documents() {
  const dispatch = useDispatch();
  const { documents = [], loading } = useSelector(
    (state) => state.documents
  );

  const tab = ["All Files", "Recent", "Shared with me", "Achived"];
  const [selectedTab, setSelectedTab] = useState("All Files");
  const [showModal, setShowModal] = useState(false);
  const [currId, setCurrId] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [selectedReportList, setSelectedReportList] = useState([]);

  // 🔥 Fetch documents
  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  // 🔁 Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search.toLowerCase());
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const parseVersion = (version) => {
    if (!version) return 0;
    return Number(version.replace("v", ""));
  };

  const filteredReports = useMemo(() => {
    let result = [...documents];

    if (debouncedValue) {
      result = result.filter(
        (item) =>
          item.name?.toLowerCase().includes(debouncedValue) ||
          item.type?.toLowerCase().includes(debouncedValue) ||
          item.status?.toLowerCase().includes(debouncedValue)
      );
    }

    if (appliedFilters) {
      const { status, type, version, versionNo, date } = appliedFilters;

      if (status) {
        result = result.filter((item) => item.status === status);
      }

      if (type) {
        result = result.filter((item) => item.type === type);
      }

      if (version && versionNo) {
        const selectedVersion = parseVersion(versionNo);
        result = result.filter((item) => {
          const itemVersion = parseVersion(item.version);
          return version === "Above"
            ? itemVersion >= selectedVersion
            : itemVersion <= selectedVersion;
        });
      }

      if (date) {
        const selectedDate = new Date(date);
        result = result.filter(
          (item) => new Date(item.lastModified) >= selectedDate
        );
      }
    }

    return result;
  }, [documents, debouncedValue, appliedFilters]);

  useEffect(() => {
    setSelectedReportList(filteredReports.slice(0, 8));
  }, [filteredReports]);

  const handleApplyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
  };

  return (
    <div className="relative w-full transition-colors duration-500 border-t dark:border-[#000000] h-full bg-[#FFFFFF] dark:bg-black pt-6 pb-24 overflow-y-auto">
      <div className="flex items-center justify-between w-full px-2 sm:px-7">
        <h1 className="text-xl lg:text-2xl font-semibold dark:text-white">
          Documents and Report
        </h1>
        <div className="flex items-center gap-2 border px-4 py-2 rounded-xl border-[#2461E6] dark:border-[#73FBFD]">
          <Download className="size-4 text-[#2457C5] dark:text-[#73FBFD]" />
          <span className="font-bold text-sm text-[#2457C5] dark:text-[#73FBFD]">
            Export All
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between mt-4 px-2 sm:px-7 gap-4">
        <div className="flex gap-4 flex-wrap">
          {tab.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedTab(item)}
              className={`px-4 py-2 rounded-xl border ${
                selectedTab === item
                  ? "bg-[#EFF6FF] dark:bg-[#344343] border-[#DBEAFE] dark:border-[#73FBFD]"
                  : "border-[#EAECEF] text-[#989696]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-xl ${
              showFilter
                ? "border-[#2461E6] dark:border-[#73FBFD]"
                : "border-[#EAECEF]"
            }`}
          >
            <ListFilter className="size-4" />
            Filter
          </button>

          <AnimatePresence>
            {showFilter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute z-50 w-full left-0 top-36"
              >
                <DocumentFilter
                  onClose={() => setShowFilter(false)}
                  onApply={handleApplyFilters}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center bg-[#EDEDED] dark:bg-[#2E2F2F] px-4 py-2 rounded-full w-full md:w-64">
            <Search className="size-4 text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>
        </div>
      </div>

      {loading && (
        <p className="text-center text-gray-500 mt-8">
          Loading documents...
        </p>
      )}

      <div className="mt-6 px-2 sm:px-7">
        {selectedReportList.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setCurrId(item.id)}
            className={`py-5 border-b cursor-pointer ${
              currId === item.id
                ? "bg-blue-50 dark:bg-[#1C3939]"
                : "hover:bg-[#d1d4db75] dark:hover:bg-gray-800"
            }`}
          >
            <TableRow
              name={item.name}
              type={item.type}
              date={item.lastModified}
              status={item.status}
              version={item.version}
              docColor={
                idx % 3 === 0
                  ? "text-[#DC2626]"
                  : idx % 3 === 1
                  ? "text-[#9333EA]"
                  : "text-[#2563EB]"
              }
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2 rounded-full bg-blue-600 dark:bg-[#73FBFD] dark:text-black px-6 py-3 text-white shadow-lg"
      >
        <Plus size={18} />
        New Report
      </button>

      {showModal && (
        <DocumentModal
          addReport={setSelectedReportList}
          onClose={() => setShowModal(false)}
        />
      )}

      {currId && (
        <VersionHistoryDrawer
          open={true}
          onClose={() => setCurrId(null)}
        />
      )}
    </div>
  );
}
