import React, { useRef } from "react";

import Type from "./Type";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import canKlcFoto from "../../assets/images/can-kilic.png";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import bg3 from "../../assets/images/bg3.jpg";


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
            backgroundImage: `url(${bg2})`,
          }}
        >
          {/* <img src={url('././assets/images/bg1.png')} style={{ width: '15%', marginLeft: '70%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={0}  speed={0}>
          <section id="Home">
            <div className=" p-6 h-screen  flex flex-col justify-center items-center">
              {/* <img src='././assets/images/can-kilic.jpeg' alt="" /> */}

              <img
                className="mb-10 mx-auto max-h-48 rounded-full  "
                src={canKlcFoto}
                alt=""
              />

              <h2 className="text-3xl font-bold mb-6 ">Hello World! 👋🏽</h2>
              <h1 className="text-5xl font-bold mb-6">I'm Can Kılıç</h1>
              <h2 className="text-3xl font-medium mb-6">
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
      </Parallax>
    </div>
  );
}

export default Home;
