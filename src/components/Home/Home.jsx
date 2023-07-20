import React, { useRef } from "react";

import Type from "./Type";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import RubberBand from "react-reveal/RubberBand";
import Shake from "react-reveal/Shake";
import Spin from "react-reveal/Spin";
import Wobble from "react-reveal/Wobble";

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
              backgroundImage: `url("/assets/images/bg3.jpg")`,
            }}
          >
            {/* <img src={url('././assets/images/bg1.png')} style={{ width: '15%', marginLeft: '70%' }} /> */}
          </ParallaxLayer>
          <LightSpeed>
            <ParallaxLayer offset={0} speed={0}>
              <section id="Home">
                <div className=" p-6 h-screen  flex flex-col justify-center items-center">
                  {/* <img src='././assets/images/can-kilic.jpeg' alt="" /> */}

                  <img
                    className="mb-10 mx-auto max-h-48 rounded-full  "
                    src={"/assets/images/can-kilic.png"}
                    alt=""
                  />

                  <h2 className="text-3xl font-bold mb-6 text-zinc-300">
                    Hello World! 👋🏽
                  </h2>
                  <h1 className="text-5xl font-bold mb-6 text-zinc-300">
                    I'm Can Kılıç
                  </h1>
                  <h2 className="text-3xl font-medium mb-6 text-zinc-300">
                    <Type />
                  </h2>
                  <a
                    className="text-xl font-medium rounded-full bg-zinc-200 py-2 px-6 hover:bg-zinc-100"
                    href="#Projects"
                  >
                    View My Projects
                  </a>
                </div>
              </section>
            </ParallaxLayer>
          </LightSpeed>
        </Parallax>
      </div>
  );
}

export default Home;
