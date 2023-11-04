import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram,AiFillMail} from "react-icons/ai"

function Footer() {
  return (
    <>
      <div className="bg-white py-3 shadow-md text-center flex justify-between px-32">
        <div>Designed and Developed by Can Kılıç </div>
        <div>Copyright © 2023 CK</div>
        <div className="flex gap-6 fill-neutral-600">
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
