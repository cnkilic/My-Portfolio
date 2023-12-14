import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram,AiFillMail} from "react-icons/ai"

function Footer() {
  return (
    <>
      <div className="bg-white py-3 flex-wrap md:flex-nowrap shadow-md  flex flex-col sm:flex-row justify-center items-center sm:justify-between  px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32">
        <div className="font-medium text-ssm md:text-sm xl:text-base">Designed and Developed by Can Kılıç </div>
        <div className="font-medium text-ssm md:text-sm xl:text-base">Copyright © 2023 CK</div>
        <div className="gap-3 md:gap-4 lg:gap-6 fill-neutral-600 hidden sm:flex">
          <a
            href="https://www.linkedin.com/in/can-kilicc-"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/cnkilic"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="mailto:canklc9598@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillMail className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/cn_klc_"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
