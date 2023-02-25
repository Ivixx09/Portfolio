import Link from "next/link";
import React from "react";


const SideBar = ({ nav, setNav }) => {

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        nav
          ? "lg:hidden z-10 fixed left-0 top-0 w-full h-screen bg-black/70"
          : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[50%] h-screen bg-slate-50 p-10 ease-in duration-500"
            : "z-10 fixed left-[-200%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href="/" onClick={() => setNav(false)}>
              <img src="/sun.svg" width="80" height="60" alt="/" />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
            >
              {/* EXIT LOGO */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] pt-4 pb-1 uppercase">Arkano Indumentaria</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="cursor-pointer">Inicio</p>
          <p className="cursor-pointer">Galeria</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
