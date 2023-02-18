import React from "react";
import SkillsSphere from "./SkillsSphere";

function About() {
  return (
    <section id="About">
      <div className="container max-w-full py-12 px-32 bg-zinc-200 ">
        <h1 className="text-3xl font-bold mb-6 text-center"> About Me  &  My Skills</h1>

        <div className="grid grid-cols-12 gap-8 justify-between">
          <div className="col-span-5 flex flex-col  justify-center">
            <h2 className="mb-2 text-2xl font-medium">
             Hi, my name is Can Kılıç. I'm a frontend web developer from Turkey.
            </h2>
            <h3 className="mb-4 text-xl font-medium">
              I'm passionate about cutting-edge, pixel-perfect, responsive user
              interfaces and dynamic user experiences.
            </h3>
            <p className="mb-4 text-base font-medium">
              After my graduation in Civil Engineering at METU, I have gathered
              my courage to make the switch to software. I dedicated all my free
              time to full-stack courses. After acquiring basic knowledge about
              the industry, I have moved on to specialize in Front-End
              development using the ReactJS library.
            </p>
            <p className="mb-4 text-base font-medium">
              Currently, I am employed as a Front-End developer at Inavitas,
              where we bring data analysis to life through visually appealing
              and user-friendly tables and graphs using ReactJS. In my free
              time, I stay current with industry advancements by doing side
              projects and learning new technologies.
            </p>
            <p className="mb-4 text-base font-medium">
              I am eager for a challenging opportunity that allows me to utilize
              my skills and experience while offering opportunities for growth
              and advancement.
            </p>
          </div>

          <div className="col-span-5 col-start-8">
            <SkillsSphere />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
