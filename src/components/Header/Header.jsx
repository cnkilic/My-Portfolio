import React, { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setCurrentScrollPosition(window.scrollY);

      if (currentScrollPos > prevScrollPos && currentScrollPos > 30) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };
 
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={`transition-transform duration-500 ease-in-out font-semibold ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        } container fixed items-center z-10 opacity-90 shadow-2xl max-w-full mx-auto py-4 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 flex justify-between ${
          currentScrollPosition < 30
            ? "text-zinc-200 bg-transparent shadow-none"
            : "text-black bg-zinc-100"
        }`}
      >
        <div className="logo flex align-middle justify-center text-center items-center">
          <a href="#Home">
            <h1 className="text-lg md:text-xl  xl:text-xl 2xl:text-2xl font-bold">
              Can.dev
            </h1>
          </a>
        </div>
        <div className="flex items-center ">
          <ul className="hidden md:flex items-center">
            <li>
              <a
                className="px-4 lg:px-6 py-2  hover:border-b-4 transition-all border-slate-600"
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="px-4 lg:px-6 py-2 hover:border-b-4 transition-all border-slate-600"
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="px-4 lg:px-6 py-2 hover:border-b-4 transition-all border-slate-600"
                href="#Experiences"
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                className="px-4 lg:px-6 py-2 hover:border-b-4 transition-all border-slate-600"
                href="#Contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className={`bg-slate-700 flex flex-row gap-2 md:gap-3 rounded-full px-4 lg:px-6 py-1.5 hover:bg-slate-600 transition-all border-slate-600 ${
                  currentScrollPosition < 30 ? "text-zinc-100" : "text-zinc-100"
                }`}
                href="/Can_Kilic_CV.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Resume</span>
                <span className="flex items-center">
                  <FaDownload />
                </span>
              </a>
            </li>
          </ul>
          <button
            className="flex flex-col gap-1 md:hidden text-3xl focus:outline-none w-8"
            onClick={toggleMobileMenu}
          >
            <span
              className={`w-5 h-0.5  ${
                currentScrollPosition < 30 ? "bg-zinc-100" : "bg-black"
              }`}
            />
            <span
              className={`w-5 h-0.5  ${
                currentScrollPosition < 30 ? "bg-zinc-100" : "bg-black"
              }`}
            />
            <span
              className={`w-5 h-0.5  ${
                currentScrollPosition < 30 ? "bg-zinc-100" : "bg-black"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content Here */}
      <div
        className={`md:hidden bg-zinc-100 text-black shadow-lg font-bold justify-center text-center fixed flex-col top-0 z-30 left-0 right-0 duration-500 ease-in-out 
          ${isMobileMenuOpen ? "-translate-y-0 " : "-translate-y-full"}`}
      >
        <div className="flex flex-row justify-between mt-4 px-4 sm:px-8">
          <div className="logo flex align-middle justify-center text-center items-center">
            <a href="#Home" onClick={toggleMobileMenu}>
              <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
                Can.dev
              </h1>
            </a>
          </div>
          <div>
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <div className="w-6 h-6 flex flex-col justify-between items-center cursor-pointer relative">
                <span className="w-5 h-0.75 bg-black transition-all transform origin-center rotate-45 absolute bottom-2"></span>
                <span className="w-5 h-0.75 bg-black transition-all transform origin-center -rotate-45 absolute bottom-2"></span>
              </div>
            </button>
          </div>
        </div>
        <div>
          <ul className="py-5">
            <li>
              <a
                className="block px-4 py-2 hover:bg-slate-100 transition-all "
                href="#About"
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 hover:bg-slate-100 transition-all"
                href="#Projects"
                onClick={toggleMobileMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 hover:bg-slate-100 transition-all"
                href="#Experiences"
                onClick={toggleMobileMenu}
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 hover:bg-slate-100 transition-all"
                href="#Contact"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="mt-1 bg-slate-700 text-zinc-100 flex items-center gap-2 w-fit mx-auto md:gap-3 rounded-full px-4 lg:px-6 py-1.5 hover:bg-slate-600 transition-all border-slate-600 "
                href="/Can_Kilic_CV.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Resume</span>
                <span className="flex items-center">
                  <FaDownload />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
