import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMedia } from "../context/MediaContext";
// import {motion, AnimatePresence} from "framer-motion"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  Monitor,
  Users,
  MessageSquare,
  MoreVertical,
  X,
  Copy,
  Send,
  Search,
  Smile,
  Hand,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const PARTICIPANTS = [
  { id: 1, name: "John Dev", initial: "J", color: "#C94A5C", isHost: true },
  { id: 2, name: "Karthik S", initial: "K", color: "#10B981" },
  { id: 3, name: "Lavanya K", initial: "L", color: "#D9923F" },
  { id: 4, name: "Diya P", initial: "D", color: "#B91C1C" },
  { id: 5, name: "Aarav M", initial: "A", color: "#8B5CF6" },
  { id: 6, name: "Diya P", initial: "D", color: "#B23939" },
  { id: 7, name: "Rahul T", initial: "R", color: "#5B6FC7" },
  { id: 8, name: "Aarav M", initial: "A", color: "#059669" },
  { id: 9, name: "Sneha R", initial: "S", color: "#16A34A" },
  { id: 10, name: "Vikram J", initial: "V", color: "#C77D3F" },
  { id: 11, name: "Ananya L", initial: "A", color: "#14B8A6" },
  { id: 12, name: "Aarav M", initial: "A", color: "#8B5CF6" },
  { id: 13, name: "Vikram J", initial: "V", color: "#C77D3F" },
  { id: 14, name: "Ananya L", initial: "A", color: "#14B8A6" },
  { id: 15, name: "Ananya L", initial: "A", color: "#14B8A6" },
];

const FlowbitMeetingPage = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDark);

  const [gridLayout, setGridLayout] = useState({
    cols: 1,
    rows: 1,
    cardWidth: 0,
    cardHeight: 0,
  });

  const [raisedHands, setRaisedHands] = useState([]);
  const [emojiReactions, setEmojiReactions] = useState({});
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      message: "Hey bro, you free ah? Need to ask something.",
      isMe: false,
    },
    { id: 2, message: "Ya I'm free. What do you want to ask?", isMe: true },
  ]);
  const participants = PARTICIPANTS;

  const [controllerHeight, setControllerHeight] = useState(0);
  const gridRef = useRef(null);
  const controllerRef = useRef(null);
  const [gridHeight, setGridHeight] = useState("100vh");
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(8);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const controllerH = controllerRef.current?.clientHeight || 0;
      setGridHeight(`calc(100vh - ${controllerH}px)`);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (controllerRef.current) {
        setControllerHeight(controllerRef.current.clientHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const emojiList = ["👍", "👏", "❤️", "😂", "🎉", "🙌"];

  const {
    localStream,
    isMicOn,
    isCameraOn,
    isScreenSharing,
    startMedia,
    toggleMic,
    toggleCamera,
    startScreenShare,
    stopScreenShare,
  } = useMedia();

  useEffect(() => {
    startMedia();
  }, []);
  const sendEmojiReaction = (emoji) => {
    const id = Date.now();

    setEmojiReactions((prev) => ({
      ...prev,
      [id]: emoji,
    }));

    setTimeout(() => {
      setEmojiReactions((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { id: Date.now(), message: chatMessage, isMe: true },
    ]);
    setChatMessage("");
  };
  useEffect(() => {
    const calculateLayout = () => {
      if (!gridRef.current) return;

      const width = gridRef.current.clientWidth;
      const total = participants.length;

      if (width < 768) {
        setPerPage(8);

        const totalPages = Math.ceil(total / perPage);
        setPages(totalPages);

        // prevent overflow page
        if (currentPage >= totalPages) {
          setCurrentPage(totalPages - 1);
          return;
        }

        const remaining = total - currentPage * perPage;
        const currentCount = Math.min(perPage, remaining);

        let cols = 1;
        let rows = 1;

        switch (currentCount) {
          case 8:
          case 7:
            cols = 2;
            rows = 4;
            break;
          case 6:
            cols = 2;
            rows = 3;
            break;
          case 5:
            cols = 2;
            rows = 3;
            break;
          case 4:
            cols = 2;
            rows = 2;
            break;
          case 3:
            cols = 1;
            rows = 3;
            break;
          case 2:
            cols = 1;
            rows = 2;
            break;
          case 1:
            cols = 1;
            rows = 1;
            break;
          default:
            cols = 1;
            rows = 1;
        }

        setGridLayout({
          cols,
          rows,
          cardWidth: 0,
          cardHeight: 0,
        });
      } else if (width >= 768 && width < 1280) {
        setPerPage(9);

        const totalPages = Math.ceil(total / 9);
        setPages(totalPages);

        // prevent overflow page
        if (currentPage >= totalPages) {
          setCurrentPage(totalPages - 1);
          return;
        }

        const remaining = total - currentPage * 9;
        const currentCount = Math.min(9, remaining);

        let cols = 1;
        let rows = 1;

        switch (currentCount) {
          case 9:
            cols = 3;
            rows = 3;
            break;

          case 8:
          case 7:
            cols = 3;
            rows = 3;
            break;

          case 6:
            cols = 2;
            rows = 3;
            break;

          case 5:
            cols = 2;
            rows = 3;
            break;

          case 4:
            cols = 2;
            rows = 2;
            break;

          case 3:
            cols = 2;
            rows = 3;
            break;

          case 2:
            cols = 2;
            rows = 1;
            break;

          case 1:
            cols = 1;
            rows = 1;
            break;

          default:
            cols = 1;
            rows = 1;
        }

        setGridLayout({
          cols,
          rows,
          cardWidth: 0,
          cardHeight: 0,
        });
      } else if (width >= 1024) {
        setPerPage(12);

        const totalPages = Math.ceil(total / 12);
        setPages(totalPages);

        // prevent overflow page
        if (currentPage >= totalPages) {
          setCurrentPage(totalPages - 1);
          return;
        }

        const remaining = total - currentPage * 12;
        const currentCount = Math.min(12, remaining);

        let cols = 1;
        let rows = 1;

        switch (currentCount) {
          case 12:
            cols = 4;
            rows = 3;
            break;

          case 11:
          case 10:
          case 9:
            cols = 4;
            rows = 3;
            break;

          case 8:
          case 7:
            cols = 4;
            rows = 2;
            break;

          case 6:
          case 5:
            cols = 3;
            rows = 2;
            break;

          case 4:
            cols = 2;
            rows = 2;
            break;

          case 3:
            cols = 2;
            rows = 3;
            break;

          case 2:
            cols = 2;
            rows = 1;
            break;

          case 1:
            cols = 1;
            rows = 1;
            break;

          default:
            cols = 1;
            rows = 1;
        }

        setGridLayout({
          cols,
          rows,
          cardWidth: 0,
          cardHeight: 0,
        });
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [participants, currentPage]);
  // const perPage = 8;
  const startIndex = currentPage * perPage;
  const visibleParticipants = participants.slice(
    startIndex,
    startIndex + perPage,
  );

  return (
    <div className={`w-full h-screen  ${isDarkTheme? "bg-black": "bg-white"} rounded-xl shadow-lg overflow-hidden relative`}>
      {/* VIDEO GRID */}
      <div
        ref={gridRef}
        className="relative overflow-hidden flex gap-2 px-1.5 py-2 w-full "
        style={{ height: gridHeight, background: isDarkTheme? "#000000": "#FFFFFF" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{
              y: direction === 1 ? "100%" : "-100%",
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: direction === 1 ? "-100%" : "100%",
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1], // smooth professional easing
            }}
            className="absolute inset-0 flex gap-2 px-1.5 py-2"
          >
            {[...Array(gridLayout.cols)].map((_, colIndex) => {
              const columnItems = visibleParticipants.filter(
                (_, index) => index % gridLayout.cols === colIndex,
              );

              return (
                <div
                  key={colIndex}
                  className="flex-1 flex flex-col gap-2 h-full"
                >
                  {columnItems.map((p) => {
                    const isLocal = p.isHost;

                    return (
                      <div
                        key={p.id}
                        className="relative rounded-xl h-full w-full overflow-hidden"
                        style={{ backgroundColor: p.color }}
                      >
                        {isLocal && localStream && isCameraOn ? (
                          <video
                            className="w-full h-full object-cover"
                            ref={(el) => el && (el.srcObject = localStream)}
                            autoPlay
                            muted
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.15))]" />
                            <div
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[25%] aspect-square rounded-full flex items-center justify-center
                        bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.3),rgba(0,0,0,0.1))] shadow-lg"
                            >
                              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow">
                                {p.initial}
                              </span>
                            </div>
                          </>
                        )}

                        <div className="absolute bottom-2 left-2 backdrop-blur px-2 py-1 rounded text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg">
                          <span className="text-white font-medium">
                            {p.name}
                          </span>
                        </div>

                        <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full">
                          {isLocal && isMicOn ? (
                            <Mic size={14} color="white" />
                          ) : (
                            <MicOff size={14} color="white" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {pages > 1 && (
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 
                  flex flex-col items-center gap-3 
                  p-3 bg-gray-100 dark:bg-[#2a2a2a] 
                  rounded-l-2xl shadow-xl z-40"
        >
          {Array.from({ length: pages }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (idx > currentPage) {
                  setDirection(1); // next
                } else {
                  setDirection(-1); // prev
                }
                setCurrentPage(idx);
              }}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
          ${
            currentPage === idx
              ? "bg-blue-500 scale-125"
              : "bg-gray-400 dark:bg-gray-600 hover:scale-110"
          }`}
            />
          ))}
        </div>
      )}

      {/* CONTROL BAR */}
      {/* CONTROL BAR */}
      <div
        ref={controllerRef}
        className={`absolute bottom-0 left-0 w-full ${isDarkTheme ? "bg-[#000000]" : "bg-[#FFFFFF]"}
  `}
      >
        {/* ================= DESKTOP ================= */}

        <div className="hidden lg:flex items-center justify-between px-6 py-3">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600 dark:text-white">
              02:30 PM | qfn-nohn-yup
            </span>
          </div>

          {/* CENTER CONTROLS */}
          <div className="flex items-center gap-3 relative">
            {/* MIC */}
            <button
              onClick={toggleMic}
              className={`w-15 h-11 rounded-full flex items-center justify-center transition
      ${
        !isMicOn
          ? "bg-red-200 text-red-600"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
            </button>

            {/* CAMERA */}
            <button
              onClick={toggleCamera}
              className={`w-15 h-11 rounded-full flex items-center justify-center transition
      ${
        !isCameraOn
          ? "bg-red-200 text-red-600"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              {isCameraOn ? <Video size={20} /> : <VideoOff size={20} />}
            </button>

            {/* SCREEN SHARE */}
            <button
              onClick={() =>
                isScreenSharing ? stopScreenShare() : startScreenShare()
              }
              className={`w-15 h-11 rounded-full flex items-center justify-center transition
      ${
        isScreenSharing
          ? "bg-red-200 text-red-600"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              <Monitor size={20} />
            </button>

            {/* EMOJI */}
            <button
              onClick={() => setShowEmojiPicker((prev) => !prev)}
              className={`w-15 h-11 rounded-full ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "}  flex items-center justify-center`}
            >
              <Smile size={20} />
            </button>

            {/* CC */}
            <button
              className={`w-15 h-11 rounded-full  ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "} flex items-center justify-center text-sm font-semibold`}
            >
              CC
            </button>

            {/* RAISE HAND */}
            <button
              onClick={() =>
                setRaisedHands((prev) =>
                  prev.includes(1)
                    ? prev.filter((id) => id !== 1)
                    : [...prev, 1],
                )
              }
              className={`w-15 h-11 rounded-full flex items-center justify-center
      ${
        raisedHands.includes(1)
          ? "bg-blue-500 text-white"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }`}
            >
              <Hand size={20} />
            </button>

            {/* MORE */}
            <button
              className={`w-15 h-11 rounded-full  ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "} flex items-center justify-center`}
            >
              <MoreVertical size={20} />
            </button>

            {/* END CALL */}
            <button className="px-6 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center">
              <PhoneOff size={20} />
            </button>

            {/* FLOATING EMOJIS */}
            <div className="pointer-events-none absolute inset-0 flex justify-center items-end z-40">
              <AnimatePresence>
                {Object.entries(emojiReactions).map(([id, emoji]) => (
                  <motion.div
                    key={id}
                    initial={{ y: 0, opacity: 0, scale: 0.8 }}
                    animate={{ y: -250, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="absolute text-5xl mb-24"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* EMOJI PICKER */}
            <AnimatePresence>
              {showEmojiPicker && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-16 left-1/2 -translate-x-1/2
          bg-white dark:bg-[#2a2a2a] shadow-lg rounded-full px-4 py-2
          flex gap-3 z-30"
                >
                  {emojiList.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => {
                        sendEmojiReaction(emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="text-2xl hover:scale-125 transition"
                    >
                      {emoji}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePanel("people")}
              className="w-15 h-11 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              <Users size={20} />
            </button>

            <button
              onClick={() => setActivePanel("chat")}
              className="w-11 h-11 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              <MessageSquare size={20} />
            </button>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex lg:hidden items-center justify-center gap-4 py-3 relative">
          {/* MIC */}
          <button
            onClick={toggleMic}
            className={`w-16 h-12 rounded-full flex items-center justify-center
      ${
        !isMicOn
          ? "bg-[#FFCACA] text-[#952B2B]"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }
      }`}
          >
            {isMicOn ? <Mic size={22} /> : <MicOff size={22} />}
          </button>

          {/* CAMERA */}
          <button
            onClick={toggleCamera}
            className={`w-16 h-12 rounded-full flex items-center justify-center
      ${
        !isCameraOn
          ? "bg-[#FFCACA] text-[#952B2B]"
          : isDarkTheme
            ? "bg-[#2E2F2F] text-[#FFFFFF]"
            : " bg-[#F8F8F8]  text-[#000000] "
      }
      }`}
          >
            {isCameraOn ? <Video size={22} /> : <VideoOff size={22} />}
          </button>

          {/* SMILE */}
          <button
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className={`w-16 h-12 rounded-full  ${isDarkTheme ? "bg-[#2E2F2F] text-[#FFFFFF]" : " bg-[#F8F8F8]  text-[#000000] "} flex items-center justify-center`}
          >
            <Smile size={22} />
          </button>

          {/* END CALL */}
          <button className="w-16 h-12 rounded-full bg-red-500 flex items-center justify-center">
            <PhoneOff size={22} />
          </button>
           <div className="pointer-events-none absolute inset-0 flex justify-center items-end z-40">
              <AnimatePresence>
                {Object.entries(emojiReactions).map(([id, emoji]) => (
                  <motion.div
                    key={id}
                    initial={{ y: 0, opacity: 0, scale: 0.8 }}
                    animate={{ y: -250, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="absolute text-5xl mb-24"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          {/* EMOJI PICKER MOBILE */}
          <AnimatePresence>
            {showEmojiPicker && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2
          bg-white dark:bg-[#2a2a2a] shadow-lg rounded-full px-4 py-2
          flex gap-3 z-30"
              >
                {emojiList.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      sendEmojiReaction(emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="text-2xl hover:scale-125 transition"
                  >
                    {emoji}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* SIDE PANEL */}
      <AnimatePresence>
        {activePanel && (
          <motion.div
            initial={{ x: 360 }}
            animate={{ x: 0 }}
            exit={{ x: 360 }}
            className="absolute top-0 right-0 h-full w-[360px] bg-white dark:bg-[#2a2a2a] shadow-xl z-0"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b dark:border-[#333]">
              <h3 className="text-lg font-semibold">
                {activePanel === "chat"
                  ? "In Call Message"
                  : activePanel === "people"
                    ? "People"
                    : "Meeting Details"}
              </h3>
              <button onClick={() => setActivePanel(null)}>
                <X />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlowbitMeetingPage;
