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
              Frontend Developer
            </h4>
            <h3 className="vertical-timeline-element-subtitle my-1 font-medium text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-xl">
              <a target="_blank" href="https://www.inavitas.com/">
                Inavitas
              </a>
            </h3>
            <h3 className="vertical-timeline-element-subtitle my-1 font-medium text-ssm md:text-sm xl:text-base  opacity-70 block ">
              September 2022 - Present
            </h3>

            <div className="text-ssm md:text-sm xl:text-base flex flex-col gap-4 font-medium mt-3">
              <div>
                ➢ Led the transformation of our React application to a micro
                front-end architecture, ensuring alignment with updated designs.
                Achieved 100% coverage of main features, decreased customer wait
                time by 35%, and reduced build time by 60%.
              </div>
              <div>
                ➢ Covered core functionality by unit and e2e tests, resulting in
                a 30% reduction in bug-related delays and a 20% increase in
                overall code quality.
              </div>
              <div>
                ➢ Collaborated with industry leaders like TAB Gıda, Havelsan,
                and TEIAŞ on diverse projects including natural SCADA, Plant,
                and Business. Ensured punctual delivery of new features and
                played an active role in resolving bugs, resulting in a 20%
                increase in customer satisfaction.
              </div>
              <div>
                ➢ Enhanced user engagement by maintaining and updating over 15
                widgets on the dashboard page, resulting in a 25% boost in
                overall dashboard usability.
              </div>
              <div>
                ➢ Worked with scrum and agile development principles using JIRA
                and collaborated with team members using Microsoft Teams.
              </div>
            </div>

            <div className="flex flex-row flex-wrap text-xxs md:text-xs mt-3">
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
                <span className="font-medium">Main Tech Stacks : </span>
                React.js • JavaScript • TypeScript • Node.js/Express
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
              <span className="font-medium">State Management : </span>
                 Redux • Zustand • MobX • TanStack-Query
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
              <span className="font-medium"> UI Libraries : </span>
                CSS(SCSS) • AGGrid • Zustand • Highcharts • Ant
                Design • Chart.js • Storybook • Fabric.js
              </span>

              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
              <span className="font-medium">Testing : </span>
                 Jest • Playwright • React Testing Library
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
              <span className="font-medium">Familiar : </span>
                 Micro Frontend • Jenkins • Rancher • Eslint • Stylint
                • Microservice • Git • Gitlab • Figma.
              </span>
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

            <div className="text-ssm md:text-sm xl:text-base flex flex-col gap-4 font-medium mt-3">
              <div>
                ➢ Developed the entire front end of the{" "}
                <a
                  href="https://www.teknikkart.com.tr/"
                  style={{ color: "#006ab5" }}
                >
                  Teknik Card
                </a>{" "}
                project from scratch. This included developing a fully
                responsive website consisting of 20 pages.
              </div>
              <div>
                ➢ Achieved a 30% increase in user engagement and a 25% decrease
                in bounce rate by translating Figma designs into pixel-perfect
                and user-friendly web and mobile interfaces.
              </div>
              <div>
                ➢ Contributed to the renovation and development stages of Mbis
                and Klimasan projects, resulting in improved project outcomes
                and efficiencies.
              </div>
            </div>

            <div className="flex flex-row flex-wrap text-xxs md:text-xs mt-3">
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">CSS</span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
                HTML5
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
                SASS
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
                Bootstrap
              </span>
              <span className="px-2 py-1 bg-zinc-200 rounded-xl m-1">
                Gulp.js
              </span>
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
