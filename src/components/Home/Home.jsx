import React, { useRef } from "react";

import Type from "./Type";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Bounce,Fade } from "react-awesome-reveal";

function Home() {
  const ref = useRef();

  return (
    <div className="h-screen ">
      <Parallax ref={ref} pages={1.05}>
        <ParallaxLayer
          offset={0}
          speed={5}
          factor={1.5}
          style={{
            backgroundImage: `url("/assets/images/homePageBg.jpg")`,
          }}
        >
        </ParallaxLayer>
        <Fade triggerOnce duration={1500} >
          <ParallaxLayer offset={0} speed={0}>
            <section id="Home">
              <div className=" p-6 h-screen  flex flex-col justify-center items-center">
                {/* <img src='././assets/images/can-kilic.jpeg' alt="" /> */}

                <img
                  className="mb-10 mx-auto max-h-48 rounded-full  "
                  src={"/assets/images/can-kilic.png"}
                  alt=""
                />

                <h2 className="text-3xl font-bold mb-6 text-zinc-200 ">
                  Hello World! 
                  <span className="animate-[wawe_2.1s_ease-in-out_infinite]  ml-3 inline-block origin-[70%_70%]">👋🏻</span>
                </h2>
                <h1 className="text-5xl font-bold mb-6 text-zinc-200 ">
                  I'm Can Kılıç
                </h1>
                <h2 className="text-3xl font-medium mb-6 text-zinc-200">
                  <Type />
                </h2>
                <a
                  className="text-xl font-medium rounded-full bg-zinc-200 py-2 px-6 hover:bg-zinc-100 hover:shadow-xl"
                  href="#Projects"
                >
                  View My Projects
                </a>
              </div>
            </section>
          </ParallaxLayer>
        </Fade>
      </Parallax>
    </div>
  );
}

export default Home;
