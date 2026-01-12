import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaBell, FaSearch, FaBars } from "react-icons/fa";

export default function Topbar({ setOpen }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(searchValue);

      // remove active border after typing stops
      setIsActive(false);

      if (inputRef.current) inputRef.current.blur();
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    if (debouncedValue.trim() !== "") {
      console.log("Searching for:", debouncedValue);
    }
  }, [debouncedValue]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpenSearch(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!searchValue) return;

    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.blur();
        setIsActive(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <>
      <div
        className={` ${
          openSearch ? "hidden" : "flex"
        }  items-center justify-between px-5 sm:px-10 py-2.5 bg-white border-b-4 border-gray-200`}
      >
        <button className="lg:hidden mr-4 " onClick={() => setOpen(true)}>
          <FaBars className="text-2xl sm:tex-3xl  text-[#333]" />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold flex-2/3 text-[#333]">
          Dashboard
        </h2>

        <div
          className={`hidden sm:flex items-center justify-between px-5 py-2 rounded-[20px] bg-[#f0f2f5]
  border transition-all duration-200
  ${isActive ? "border-blue-500 ring-2 ring-blue-300" : "border-transparent"}
  w-full`}
        >
          <FaSearch className="text-[14px] text-[#8a8f99]" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search tasks..."
            className="w-full text-[14px] bg-transparent outline-none border-none text-black pl-3"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsActive(true);
            }}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </div>

        <button className="mr-6" onClick={() => setOpenSearch(true)}>
          <FaSearch className=" sm:hidden size-5 sm:size-7 text-[#8a8f99]" />
        </button>

        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center justify-center">
            <FaBell className="size-5 sm:size-7 text-[#666] cursor-pointer" />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="avatar"
            className="size-8 rounded-full cursor-pointer border border-black"
          />
        </div>
      </div>

      <div
        className={` ${
          !openSearch ? "hidden" : "flex"
        }  items-center justify-between px-5 sm:px-10 py-2.5 bg-white border-b-4 border-gray-200 gap-5`}
      >
        <div
          className={`flex items-center justify-between px-5 py-2 rounded-[20px] bg-[#f0f2f5]
  border transition-all duration-200
  ${isActive ? "border-blue-500 ring-2 ring-blue-300" : "border-transparent"}
  focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 w-full`}
        >
          <FaSearch className="text-[14px] text-[#8a8f99]" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search tasks..."
            className="w-full text-[14px] bg-transparent outline-none border-none text-black pl-3"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsActive(true); // <- activate border on type
            }}
            onFocus={() => setIsActive(true)} // <- activate border on focus
          />
        </div>

        <div className="flex items-center justify-center">
          <button onClick={() => setOpenSearch(false)}>
            <X className="size-7 text-black" />
          </button>
        </div>
      </div>
    </>
  );
}
