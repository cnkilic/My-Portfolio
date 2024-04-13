import React, { useRef, useState, useEffect } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Bounce, Fade } from "react-awesome-reveal";

import Type from "./Type";

function Home() {
  const ref = useRef();

  const [showParalax, setShowParalax] = useState(window.innerWidth >= 1026);

  useEffect(() => {
    // Add an event listener to update showDate on window resize
    const handleResize = () => {
      setShowParalax(window.innerWidth >= 800); // Set your desired width
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

  //  const height = showParalax ? "0px" : "50px"
  const height = "0px";

  return (
    <section id="Home " className="bg-zinc-200">
      <div style={{ height: `calc(100vh - ${height})` }}>
        <Parallax ref={ref} pages={showParalax ? 1.05 : 1.0}>
          <ParallaxLayer
            offset={0}
            speed={5}
            factor={1.5}
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url("/assets/images/homePageBg.jpg")`,
              height: "1307px",
              backgroundSize: "revert-layer",
              backgroundRepeat: "revert-layer",
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
                <h2 className="font-semibold mb-2 md:mb-4 text-zinc-200 text-xl md:text-2xl xl:text-2xl 2xl:text-3xl">
                  Hello World!
                  <span className="animate-[wawe_2.1s_ease-in-out_infinite] ml-3 inline-block origin-[70%_70%]">
                    👋🏻
                  </span>
                </h2>
                <h1 className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 text-zinc-200">
                  I'm Can Kılıç
                </h1>
                <h2 className="text-lg md:text-2xl xl:text-2xl 2xl:text-3xl font-medium mb-3 sm:mb-4 md:mb-6 text-zinc-200">
                  <Type />
                </h2>
                <a
                  className="text-sm md:text-base lg:text-lg 2xl:text-xl  font-medium rounded-full bg-zinc-200 py-1.5  2xl:py-2 px-4 md:px-6 hover:bg-zinc-100 hover:shadow-xl"
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
