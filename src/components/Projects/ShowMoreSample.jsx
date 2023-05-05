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
          <div className="text-lg font-bold">{title}</div>
          <div className="flex gap-4 items-center">
            <a href={gitHubLink} rel="noopener noreferrer" target="_blank">
              <FaGithub className="fill-gray-600 w-6 h-6 hover:fill-gray-800 hover:-translate-y-1 ease-out" />
            </a>
            <a href={externalLink} rel="noopener noreferrer" target="_blank">
              <BiLinkExternal className="fill-gray-600 w-6 h-6 hover:fill-gray-800 hover:-translate-y-1 ease-out" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {descriptions.map((description) => (
            <div>{description}</div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {techStacks.map((techStack) => (
            <span className="text-sm rounded-md bg-gray-600 text-zinc-100 px-3 py-1">
              {techStack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowMoreSample;
