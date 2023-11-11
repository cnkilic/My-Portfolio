import React, { useState, useEffect } from "react";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currenScrollPosition, setCurrenScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setCurrenScrollPosition(window.scrollY);

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
        className={`transition-transform duration-500 ease-in-out font-semibold ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        } container fixed items-center z-10  opacity-90 shadow-2xl max-w-full mx-auto py-4  px-32 flex justify-between ${
          currenScrollPosition < 30
            ? "text-zinc-200 bg-transparent shadow-none"
            : "text-black bg-zinc-100"
        } `}
      >
        <div className="logo flex align-middle justify-center text-center items-center">
          <a href="#Home">
            <h1 className="text-lg font-bold">Can.dev</h1>
          </a>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center">
            <li>
              <a
                className="px-6 py-2  hover:border-b-4  transition-all border-slate-600"
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 hover:border-b-4 transition-all border-slate-600"
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 hover:border-b-4 transition-all border-slate-600"
                href="#Experiences"
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 hover:border-b-4 transition-all border-slate-600"
                href="#Contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className={`bg-slate-700 flex flex-row gap-3 rounded-full px-6 py-1.5 hover:bg-slate-600 transition-all border-slate-600 ${
                  currenScrollPosition < 30 ? "text-zinc-100" : "text-zinc-100"
                }`}
                href="/Can_Kilic_CV.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Resume</span>
                <span>
                  <img className="w-6" src="/assets/images/cv-icon.png" alt="" />
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
