import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiLinkExternal } from "react-icons/bi";
import { SiJavascript } from "react-icons/Si";
import { FaReact } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";

// import reactIcon from "/public/images/reactIcon.png";

function Experieces() {
  const Experiences = [{}];
  return (
    <section id="Experiences">
      <div className="container max-w-full py-12 px-32 bg-zinc-200 ">
        <h1 className="text-3xl font-bold mb-16 text-center">Experiences</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2022 - Present"
            iconStyle={{ background: "#323330", color: "#61DBFB" }}
            contentStyle={{ borderTop: "3px solid #323330",borderBottom: "3px solid #323330" }}
            icon={<FaReact />}
          >
            <h4 className="vertical-timeline-element-title text-xl font-semibold ">
              Full-Stack Developer
            </h4>
            <h3 className="vertical-timeline-element-subtitle text-lg ">
              <a href="https://www.inavitas.com/tr/">Inavitas</a>
            </h3>

            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              React.js
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              Node.js
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              CSS
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              HTML5
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              SASS
            </span>
            <p>
              ➢ Built functional, Reusable, Unit Testable, Easy to read and
              debug user interfaces using React.js (HighCharts.js, AGGrid),
              JavaScript, and CSS (Ant Design).
            </p>
            <p>
              ➢ Worked with scrum and agile development principles using JIRA
              and collaborated with team members using Microsoft Teams.
            </p>
            <p>
              ➢ Gained experience in REST APIs, Micro-service architecture,
              Asynchronous programming (Axios), Rx.js, Git, GitLab, ESlint, and
              Figma.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ borderTop: "3px solid #323330", borderBottom: "3px solid #323330" }}
            date="May 2022 - September 2022"
            iconStyle={{ background: "#323330", color: "#f7df1e" }}
            icon={<SiJavascript />}
          >
            <h4 className="vertical-timeline-element-title text-xl font-semibold ">
              Front-End Developer
            </h4>
            <h3 className="vertical-timeline-element-subtitle text-lg mb-3">
              <a href="https://arinadigital.com/tr/">Arina Digital</a>
            </h3>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              CSS
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              HTML5
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              SASS
            </span>
            <span className="px-2 py-1 bg-zinc-200 rounded-3xl text-xs m-1">
              Bootstrap
            </span>
            <p>
              {" "}
              ➢ Build pixel-perfect, user friendly web and mobile interfaces by
              using HTML5, CSS3 (Sass, Less, Bootstrap), JavaScript etc...
            </p>
            <p>
              ➢ Developed the whole frontend of Teknik Card
              (https://www.teknikkart.com.tr/) and participated in the
              renovation and development stages of projects such as Mbis and
              Klimasan.
            </p>
            <p>
              ➢ Collaborated with team members using BitBucket, Slack, Microsoft
              Teams and Zoom applications.
            </p>
            <p>
              ➢ Experienced in responsive UX/UI development and became familiar
              with xDesign and Figma design tools
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#323330", color: "#fff" }}
            icon={<FaHourglassStart />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experieces;
