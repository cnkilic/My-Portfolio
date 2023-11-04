import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram,AiFillMail} from "react-icons/ai";



function AnchorLinks() {
  return (
    <div className="fixed bottom-0 left-16 flex flex-col justify-center items-center">
      <a
        href="mailto:canklc9598@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillMail className="fill-slate-200 w-8 h-8 mb-4" />
      </a>
      <a
        href="https://github.com/cnkilic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="fill-slate-200 w-8 h-8 mb-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/can-kilicc-"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="fill-slate-200 w-8 h-8 mb-4" />
      </a>
      <a
        href="https://www.instagram.com/cn_klc_/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillInstagram className="fill-slate-200 w-8 h-8 mb-4" />
      </a>
      <div className="h-24 w-0.5 bg-slate-200"></div>
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
