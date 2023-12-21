import React from "react";
import SkillsSphere from "./SkillsSphere";
import { Fade, Rotate } from "react-awesome-reveal";

function About() {
  return (
    <section id="About">
      <div className="container max-w-full py-6 md:py-8  xl:py-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 bg-zinc-200 ">
        <h1 className="text-2xl md:text-2xll xl:text-3xl font-bold mb-4  md:mb-6 lg:mb-10 xl:mb-16 text-center">
          About Me & My Skills
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
          <div className="flex flex-col justify-center">
            <Fade triggerOnce duration={1500} direction="left">
            <div className="mb-4 text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold">
                Welcome to my portfolio page! My name is Can Kılıç, and I am a
                frontend web developer from Turkey.
              </div>
            </Fade>
            <Fade triggerOnce duration={1500} direction="left">
            <div className="mb-4 text-ssm md:text-sm xl:text-base 2xl:text-lg font-semibold">
                I'm passionate about cutting-edge, pixel-perfect, responsive
                user interfaces and dynamic user experiences.
              </div>
            </Fade>
            <Fade triggerOnce duration={1500} direction="left">
              <div className="mb-4 text-ssm md:text-sm xl:text-base 2xl:text-lg font-medium">
                My journey in software development started after I graduated
                from METU with a degree in Civil Engineering. I realized that my
                true passion lay in software, so I dedicated all my free time to
                learning full-stack development. As I gained more knowledge
                about the industry, I decided to specialize in Front-End
                development using the ReactJS library.
              </div>
              <div className="mb-4 text-ssm md:text-sm xl:text-base 2xl:text-lg font-medium">
                Currently, I am employed as a Front-End developer at Inavitas.
                Here, I create visually appealing and user-friendly components, tables and
                graphs that bring data analysis to life using ReactJS. To stay
                up to date with industry advancements, I work on side projects
                and learn new technologies in my free time.
              </div>
              <div className="mb-4 text-ssm md:text-sm xl:text-base 2xl:text-lg font-medium">
                I am always eager to take on new challenges that allow me to
                utilize my skills and experience while offering opportunities
                for growth and advancement. If you're interested in
                collaborating or learning more about my work, feel free to get
                in touch with me.
              </div>
            </Fade>
          </div>
          <div className="flex justify-center items-center text-sm  md:text-base pl-12 pr-12  sm:pl-36 sm:pr-36   md:pl-44 md:pr-44 lg:px-0 lg:pl-24 xl:pl-32 2xl:pl-48">
            <Rotate triggerOnce direction="bottom-left" duration={1500}>
              <SkillsSphere />
            </Rotate>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
