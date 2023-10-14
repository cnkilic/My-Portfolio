import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import ShowMoreSample from "./ShowMoreSample";
import Fade from "react-reveal/Fade";

function ShowMore({ showMoreData }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {showMore && (
        <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4 mb-8 ease-out">
          <Fade top>
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
          <div className="border-b  border-gray-500 w-2/5 mb-2.5" />
          <div className="flex flex-row w-1/5 text-center justify-center ">
            <div className="mr-3">Show {showMore ? "Less" : "More"} </div>
            {showMore ? (
              <MdExpandLess className="h-full w-6" />
            ) : (
              <MdExpandMore className="h-full w-6" />
            )}
          </div>
          <div className="border-b  border-gray-500 w-2/5 mb-2.5" />
        </div>
      </Fade>
    </div>
  );
}

export default ShowMore;
