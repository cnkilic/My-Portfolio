import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function ShowMoreSample({
  title,
  descriptions,
  techStacks,
  gitHubLink,
  externalLink,
  image,
}) {
  return (
    <div className="flex flex-col shadow-2xl border rounded-2xl">
      <div>
        <a target="_blank" href={externalLink}>
          <img className=" rounded-t-2xl" src={image} alt="" />
        </a>
      </div>
      <div className="p-6 flex flex-col gap-7">
        <div className="flex flex-row justify-between items-center">
          <div className="flex text-sm md:text-lg xl:text-xl 2xl:text-xl font-bold">{title}</div>
          <div className="flex gap-4 items-center">
            <a href={gitHubLink} rel="noopener noreferrer" target="_blank">
              <FaGithub className="w-5 h-5 lg:w-6 lg:h-6 fill-gray-600 hover:fill-gray-800 hover:-translate-y-1 ease-out" />
            </a>
            <a href={externalLink} rel="noopener noreferrer" target="_blank">
              <BiLinkExternal className="w-5 h-5 lg:w-6 lg:h-6 fill-gray-600 hover:fill-gray-800 hover:-translate-y-1 ease-out" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-ssm md:text-sm xl:text-base 2xl:text-lg ">
          {descriptions.map((description) => (
            <div>{description}</div>
          ))}
        </div>
        <div className="flex flex-row gap-2 flex-wrap text-xxs md:text-xs xl:text-sm">
          {techStacks.map((techStack) => (
            <span className="rounded-md bg-gray-600 text-zinc-100 px-1.5 md:px-2.5 xl:px-2.5 2xl:px-3 py-1">
              {techStack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowMoreSample;
