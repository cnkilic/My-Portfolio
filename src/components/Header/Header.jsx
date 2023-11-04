import React, { useState, useEffect } from "react";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 30) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <div
        className={`transition-transform duration-500 ease-in-out ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        } container fixed z-10 bg-white bg-opacity-50 max-w-full mx-auto py-6  px-32 flex justify-between `}
      >
        <div className="logo flex align-middle justify-center text-center items-center">
          <a href="#Home">
            <h1 className="text-lg font-semibold">Can.dev</h1>
          </a>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>
              <a
                className="px-6 py-2  hover:border-b-4 transition-all border-slate-400"
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 hover:border-b-4 transition-all border-slate-400"
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 hover:border-b-4 transition-all border-slate-400"
                href="#Experiences"
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 hover:border-b-4 transition-all border-slate-400"
                href="#Contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="bg-slate-400 rounded-full px-6 py-2 hover:bg-slate-300 transition-all border-slate-400"
                href="/Can_Kilic_CV.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
