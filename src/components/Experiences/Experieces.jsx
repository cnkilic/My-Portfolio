import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHourglassStart } from "react-icons/fa";

function Experieces() {
  const Experiences = [{}];
  const [showDate, setShowDate] = useState();

  useEffect(() => {
    // Add an event listener to update showDate on window resize
    const handleResize = () => {
      setShowDate(window.innerWidth >= 1170); // Set your desired width
    };

    // Initial check on mount
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="Experiences">
      <div className="container max-w-full py-6 md:py-8 xl:py-12 px-4 md:px-16 lg:px-20 xl:px-24 2xl:px-32 bg-zinc-200 ">
        <h1 className="text-2xl md:text-2xll xl:text-3xl font-bold mb-2 md:mb-4 lg:mb-4 xl:mb-8 2xl:mb-12  text-center">
          Experiences
        </h1>
        <VerticalTimeline style={{ padding: "0px" }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={showDate ? "September 2022 - Present" : ""}
            contentStyle={{
              borderTop: "3px solid #323330",
              borderBottom: "3px solid #323330",
            }}
            icon={<img src="/assets/images/inavitasLogo.svg" />}
            iconOnClick={() => {
              window.open("https://www.inavitas.com/", "_blank");
            }}
            iconStyle={{
              background: "#FFF",
              cursor: "pointer",
              boxShadow:
                "0 0 0 4px #fff, inset 0px 0px 0px rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05) ",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h4 className="vertical-timeline-element-title text-base sm:text-lg md:text-xl xl:text-xl 2xl:text-2xl font-semibold ">
              Full-Stack Developer
            </h4>
            <h3 className="vertical-timeline-element-subtitle my-1 font-medium text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-xl">
              <a target="_blank" href="https://www.inavitas.com/">
                Inavitas
              </a>
            </h3>
            <h3 className="vertical-timeline-element-subtitle my-1 font-medium text-ssm md:text-sm xl:text-base  opacity-70 block ">
              September 2022 - Present
            </h3>

            <div className="flex flex-row flex-wrap text-xxs md:text-xs ">
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                React.js
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                Node.js
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">CSS</span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                Redux
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                JIRA
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                RxJS
              </span>
            </div>
            <div className="text-ssm md:text-sm xl:text-base flex flex-col gap-4 font-medium mt-3">
              <div>
                ➢ Built functional, Reusable, Unit Testable, Easy to read and
                debug user interfaces using React.js (HighCharts.js, AGGrid),
                JavaScript, and CSS (Ant Design).
              </div>
              <div>
                ➢ Worked with scrum and agile development principles using JIRA
                and collaborated with team members using Microsoft Teams.
              </div>
              <div>
                ➢ Gained experience in REST APIs, Micro-service architecture,
                Asynchronous programming (Axios), Rx.js, Git, GitLab, ESlint,
                and Figma.
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              borderTop: "3px solid #323330",
              borderBottom: "3px solid #323330",
            }}
            date={showDate ? "May 2022 - September 2022" : ""}
            iconStyle={{
              background: "#FFF",
              cursor: "pointer",
              boxShadow:
                "0 0 0 4px #fff, inset 0px 0px 0px rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              display: "flex",
              justifyContent: "center",
            }}
            icon={<img src="/assets/images/arinaDigitalLogo.svg" />}
            iconOnClick={() => {
              window.open("https://arinadigital.com/", "_blank");
            }}
          >
            <h4 className="vertical-timeline-element-title text-base sm:text-lg md:text-xl xl:text-xl 2xl:text-2xl font-semibold">
              Front-End Developer
            </h4>
            <h3 className="vertical-timeline-element-subtitle my-1 font-medium text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-xl">
              <a target="_blank" href="https://arinadigital.com/">
                Arina Digital
              </a>
            </h3>
            <h3 className="vertical-timeline-element-subtitle my-1 font-medium text-ssm md:text-sm xl:text-base  opacity-70 block ">
              May 2022 - September 2022
            </h3>
            <div className="flex flex-row flex-wrap text-xxs md:text-xs mt-2">
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">CSS</span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                HTML5
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                SASS
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                Bootstrap
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-3xl m-1">
                Gulp.js
              </span>
            </div>
            <div className="text-ssm md:text-sm xl:text-base flex flex-col gap-4 font-medium mt-3">
              <div>
                ➢ Build pixel-perfect, user friendly web and mobile interfaces
                by using HTML5, CSS3 (Sass, Less, Bootstrap), JavaScript etc...
              </div>
              <div>
                ➢ Developed the whole frontend of Teknik Card
                (https://www.teknikkart.com.tr/) and participated in the
                renovation and development stages of projects such as Mbis and
                Klimasan.
              </div>
              <div>
                ➢ Collaborated with team members using BitBucket, Slack,
                Microsoft Teams and Zoom applications.
              </div>
              <div>
                ➢ Experienced in responsive UX/UI development and became
                familiar with xDesign and Figma design tools
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "#fff",
              color: "#323330",
              boxShadow:
                "0 0 0 4px #fff, inset 0px 0px 0px rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
            }}
            icon={
              <FaHourglassStart
                style={{
                  width: "60%",
                  height: "60%",
                  transform: "translate(-50%, -50%)",
                  marginLeft: "0px",
                  marginTop: "0px",
                }}
              />
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experieces;
