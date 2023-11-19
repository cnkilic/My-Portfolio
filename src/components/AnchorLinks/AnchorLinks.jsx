import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";

function AnchorLinks() {
  return (
    <div className="fixed bottom-0 left-2 md:left-4 lg:left-6 xl:left-8 2xl:left-10  flex-col justify-center items-center hidden md:flex">
      <a
        href="mailto:canklc9598@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
        className="mb-3"
      >
        <AiFillMail className="bg-zinc-100 w-7 h-7 lg:w-8 lg:h-8 rounded-full p-1" />
      </a>
      <a
        href="https://github.com/cnkilic"
        rel="noopener noreferrer"
        target="_blank"
        className="mb-3"
      >
        <FaGithub className="bg-zinc-100 w-7 h-7 lg:w-8 lg:h-8 rounded-full p-1" />
      </a>
      <a
        href="https://www.linkedin.com/in/can-kilicc-"
        rel="noopener noreferrer"
        target="_blank"
        className="mb-3"
      >
        <FaLinkedin className="bg-zinc-100 w-7 h-7 lg:w-8 lg:h-8 rounded-full p-1" />
      </a>
      <a
        href="https://www.instagram.com/cn_klc_/"
        rel="noopener noreferrer"
        target="_blank"
        className="mb-3"
      >
        <AiFillInstagram className="bg-zinc-100 w-7 h-7 lg:w-8 lg:h-8 rounded-full p-1" />
      </a>
      <div className="flex flex-row">
        <div className="h-16 lg:h-20 2xl:h-24 w-0.5 bg-black"></div>
        <div className="h-16 lg:h-20 2xl:h-24 w-0.5 bg-zinc-100"></div>
      </div>
    </div>

    // <div className="bg-zinc-800 py-4 pr-2 rounded-r-2xl fixed top-1/2 -translate-y-1/2 left-0 flex flex-col justify-center items-center">
    //   <a
    //     href="https://www.linkedin.com/in/can-kilicc-"
    //     rel="noopener noreferrer"
    //     target="_blank"
    //   >
    //     <FaLinkedin className="fill-slate-200 w-8 h-8 mb-4" />
    //   </a>
    //   <a
    //     href="https://github.com/cnkilic"
    //     rel="noopener noreferrer"
    //     target="_blank"
    //   >
    //     <FaGithub className="fill-slate-200 w-8 h-8 mb-4" />
    //   </a>
    //   <a
    //     href="mailto:canklc9598@gmail.com"
    //     rel="noopener noreferrer"
    //     target="_blank"
    //   >
    //     <AiFillMail className="fill-slate-200 w-8 h-8 mb-4" />
    //   </a>
    //   <a
    //     href="https://www.instagram.com/cn_klc_"
    //     rel="noopener noreferrer"
    //     target="_blank"
    //   >
    //     <AiFillInstagram className="fill-slate-200 w-8 h-8 " />
    //   </a>
    //   {/* <div className="h-24 w-0.5 bg-slate-200"></div> */}
    // </div>
  );
}

export default AnchorLinks;
