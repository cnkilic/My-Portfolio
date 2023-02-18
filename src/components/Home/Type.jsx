import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Front-End Developer", "React Developer"],
          autoStart: true,
          loop: true,
          delay:50,
          deleteSpeed: 30,
          pauseFor:2000,
        }}
      />
    </>
  );
}

export default Type;
