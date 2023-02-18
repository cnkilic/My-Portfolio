import React from "react";
import Type from "./Type";

function Home() {
  return (
    <section id="Home">
      <div className="bg-[url('././assets/images/coverPageBg2.png')] p-6 h-screen  flex flex-col justify-center items-center">
        {/* <img src='././assets/images/can-kilic.jpeg' alt="" /> */}

        <img
          className="mb-10 mx-auto max-h-48 rounded-full  "
          src="/can-kilic.png"
          alt=""
        />

        <h2 className="text-3xl font-bold mb-6">Hello World! 👋🏽</h2>
        <h1 className="text-5xl font-bold mb-6">I'm Can Kılıç</h1>
        <h2 className="text-3xl font-medium mb-6">
          <Type/>
        </h2>
        <a
          className="text-xl font-medium rounded-full bg-zinc-200 py-2 px-6 hover:bg-zinc-100"
          href="#Projects"
        >
          View My Projects deneme
        </a>
      </div>
    </section>
  );
}

export default Home;
