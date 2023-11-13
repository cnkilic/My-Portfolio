import React, { useRef } from "react";
import Type from "./Type";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Bounce, Fade } from "react-awesome-reveal";

function Home() {
  const ref = useRef();

  return (
    <section id="Home">
      <div className="h-screen">
        <Parallax ref={ref} pages={1.05}>
          <ParallaxLayer
            offset={0}
            speed={5}
            factor={1.5}
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url("/assets/images/homePageBg.jpg")`,
              height: "1307px",
            }}
          ></ParallaxLayer>
          <Fade triggerOnce duration={1500}>
            <ParallaxLayer offset={0} speed={0}>
              <section
                id="Home"
                className="flex flex-col justify-center items-center h-screen p-6"
              >
                <img
                  className="mb-4 md:mb-6 mx-auto rounded-full max-h-36 sm:max-h-40 md:max-h-44 lg:max-h-48 xl:max-h-48 2xl:max-h-52"
                  src={"/assets/images/can-kilic.png"}
                  alt=""
                />
                <h2 className="font-bold mb-2 md:mb-4 text-zinc-200 text-xl md:text-2xl xl:text-3xl ">
                  Hello World!
                  <span className="animate-[wawe_2.1s_ease-in-out_infinite] ml-3 inline-block origin-[70%_70%]">
                    👋🏻
                  </span>
                </h2>
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 text-zinc-200">
                  I'm Can Kılıç
                </h1>
                <h2 className="text-lg md:text-xl xl:text-3xl font-medium mb-3 sm:mb-4 md:mb-6 text-zinc-200">
                  <Type />
                </h2>
                <a
                  className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium rounded-full bg-zinc-200 py-1.5  md:py-2 px-4 md:px-6 hover:bg-zinc-100 hover:shadow-xl"
                  href="#Projects"
                >
                  View My Projects
                </a>
              </section>
            </ParallaxLayer>
          </Fade>
        </Parallax>
      </div>
    </section>
  );
}

export default Home;
