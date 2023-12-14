import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import ShowMoreSample from "./ShowMoreSample";
import { Fade } from "react-awesome-reveal";

function ShowMore({ showMoreData }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {showMore && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-8 ease-out">
          <Fade triggerOnce  direction="up">
            {showMoreData.map((showMoreSample) => (
              <ShowMoreSample
                key={showMoreSample.title}
                title={showMoreSample.title}
                descriptions={showMoreSample.descriptions}
                techStacks={showMoreSample.techStacks}
                gitHubLink={showMoreSample.gitHubLink}
                externalLink={showMoreSample.externalLink}
                image={showMoreSample.image}
              />
            ))}
          </Fade>
        </div>
      )}
      <Fade top>
        <div
          onClick={() => setShowMore(!showMore)}
          className="flex flex-row cursor-pointer"
        >
          <div className="border-b  border-gray-500 w-4/12 lg:w-5/12 mb-2.5" />
          <div className="flex flex-row w-4/12 lg:w-2/12 text-center justify-center ">
            <div className="mr-0 sm:mr-3 text-ssm md:text-sm xl:text-base 2xl:text-lg">Show {showMore ? "Less" : "More"} </div>
            {showMore ? (
              <MdExpandLess className="h-full w-6" />
            ) : (
              <MdExpandMore className="h-full w-6" />
            )}
          </div>
          <div className="border-b  border-gray-500 w-4/12 lg:w-5/12 mb-2.5" />
        </div>
      </Fade>
    </div>
  );
}

export default ShowMore;
