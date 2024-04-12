import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

function Sample({
  title,
  descriptions,
  techStacks,
  gitHubLink,
  externalLink,
  image,
  imgLocation,
}) {
  return (
    <div>
      <Fade triggerOnce duration={1500} direction="up">
        <div className="grid grid-cols-12 gap-4 justify-between mb-12 md:mb-16 items-center">
          <div
            className={`col-span-12 lg:col-span-5 flex flex-col gap-6 justify-center  items-center lg:items-start m-auto w-full sm:w-10/12 md:w-9/12 lg:w-full ${
              imgLocation === "right" ? "order-3 lg:order-1" : "order-3"
            }`}
          >
            <div className=" flex text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold">
              {title}
            </div>

            <div className="flex flex-col gap-2 lg:gap-4 text-ssm md:text-sm xl:text-base 2xl:text-lg ">
              {descriptions.map((description, index) => (
                <div key={index}>{description}</div>
              ))}
            </div>

            <div className=" flex flex-row gap-2 flex-wrap text-xxs md:text-xs xl:text-sm 2xl:text-base ">
              {techStacks.map((techStack, index) => (
                <span
                  key={index}
                  className="rounded-md bg-gray-600 text-zinc-100 px-1.5 md:px-2.5 xl:px-2.5 2xl:px-3 py-1"
                >
                  {techStack}
                </span>
              ))}
            </div>
            <div className="flex flex-row gap-5 ">
              {gitHubLink && (
                <a
                  className=""
                  href={gitHubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6  xl:w-7 xl:h-7  fill-gray-600  hover:fill-gray-800 hover:-translate-y-1 ease-out" />
                </a>
              )}
              <a href={externalLink} rel="noopener noreferrer" target="_blank">
                <BiLinkExternal className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7  fill-gray-600  hover:fill-gray-800 hover:-translate-y-1 ease-out" />
              </a>
            </div>
          </div>

          <div className="col-span-1 order-2"></div>
          <div
            className={`col-span-12 lg:col-span-6 px-0 sm:px-16 md:px-24  lg:px-0 ${
              imgLocation === "right" ? "order-1 lg:order-3" : "order-1"
            }`}
          >
            <a target="_blank" href={externalLink}>
              <img src={image} alt="" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Sample;
