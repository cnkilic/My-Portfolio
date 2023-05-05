import React from "react";
import SkillsSphere from "./SkillsSphere";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
import Rotate from "react-reveal/Rotate";

function About() {
  return (
    <section id="About">
      <div className="container max-w-full py-12 px-32 bg-zinc-200 ">
        <h1 className="text-3xl font-bold mb-16 text-center">
          About Me & My Skills
        </h1>

        <div className="grid grid-cols-12 gap-8 justify-between">
          <div className="col-span-6 flex flex-col  justify-center">
            <Fade left>
              <h2 className="mb-2 text-2xl font-medium">
                Welcome to my portfolio page! My name is Can Kılıç, and I am a
                frontend web developer from Turkey.
              </h2>
            </Fade>
            <Fade left>
              <h3 className="mb-4 text-xl font-medium">
                I'm passionate about cutting-edge, pixel-perfect, responsive
                user interfaces and dynamic user experiences.
              </h3>
            </Fade>
            <Fade left>
              <p className="mb-4 text-base font-medium">
                My journey in software development started after I graduated
                from METU with a degree in Civil Engineering. I realized that my
                true passion lay in software, so I dedicated all my free time to
                learning full-stack development. As I gained more knowledge
                about the industry, I decided to specialize in Front-End
                development using the ReactJS library.
              </p>
              <p className="mb-4 text-base font-medium">
                Currently, I am employed as a Front-End developer at Inavitas.
                Here, I create visually appealing and user-friendly tables and
                graphs that bring data analysis to life using ReactJS. To stay
                up to date with industry advancements, I work on side projects
                and learn new technologies in my free time.
              </p>
              <p className="mb-4 text-base font-medium">
                I am always eager to take on new challenges that allow me to
                utilize my skills and experience while offering opportunities
                for growth and advancement. If you're interested in
                collaborating or learning more about my work, feel free to get
                in touch with me.
              </p>
            </Fade>
          </div>
          <div className="col-span-6 col-start-8">
            <Rotate top left>
              <SkillsSphere />
            </Rotate>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
