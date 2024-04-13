import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <>
      <Typewriter
        words={[
          "Front-End Developer",
          "React Developer",
          "Full-Stack Developer",
        ]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={30}
        delaySpeed={2000}
        translate="no"
      />
    </>
  );
}

export default Type;
