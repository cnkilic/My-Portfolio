import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/Go";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Contact() {
  const ref = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form data", event.target.value);
    console.log("form elements", event.target.elements);
    // const { name, email, message } = e.target.elements
  };

  return (
    <div className="h-screen ">
      <Parallax ref={ref} pages={1.02} >
        <ParallaxLayer
          offset={0}
          speed={5}
          factor={1.5}
          style={{
            backgroundImage: `url("/assets/images/contactBg8.png")`,
            backgroundPosition: "center" ,
          }}
        ></ParallaxLayer>
        <ParallaxLayer style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>
          <section id="Contact">
            <div className="container max-w-full py-24 px-32  ">
              <div className="bg-slate-100 grid grid-cols-2 p-9 rounded-xl">
                <div>
                  <h2 className="text-3xl font-semibold mb-6">
                    Send A Message
                  </h2>
                  <div className="pr-16">
                    <form onSubmit={handleSubmit} method="POST" action="">
                      <div>
                        <input
                          className="w-full py-1 px-2 border-2 rounded-md"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="w-full  py-1 px-2 rounded-md border-2 mt-5"
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className=" w-full py-1 px-2 rounded-md border-2 mt-5"
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          className="w-full h-36 border-2 rounded-md mt-5 p-2"
                          type="text"
                          id="message"
                          name="message"
                          placeholder="Write something here..."
                        />
                      </div>
                      <div>
                        <button
                          className="py-2 px-7 bg-blue-500 text-white rounded-3xl mt-5"
                          type="submit"
                        >
                          Send a message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                  <div>
                    <p className="text-lg">
                      Whether you want to get in touch, talk about a project
                      collaboration, or just say hi, I'd love to hear from you.
                      <br />
                      Simply fill the from and send me an email.
                    </p>
                    <div className="flex mt-8">
                      <div className="mr-6">
                        <a
                          href="https://github.com/cnkilic"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaGithub className="w-8 h-8 cursor-pointer hover:w-10 hover:h-10 ease-out transition-all" />
                        </a>
                      </div>
                      <div className="mr-6">
                        <a
                          href="https://www.linkedin.com/in/can-kilicc-"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaLinkedin className="w-8 h-8 cursor-pointer hover:w-10 hover:h-10 ease-out transition-all" />
                        </a>
                      </div>
                      <div className="mr-6">
                        <a
                          href="mailto:canklc9598@gmail.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <GoMail className="w-8 h-8 cursor-pointer hover:w-10 hover:h-10 ease-out transition-all" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Contact;
