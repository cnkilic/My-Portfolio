import React, { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import emailjs from "@emailjs/browser";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("success");
  const [showParalax, setShowParalax] = useState(window.innerWidth >= 1026);

  useEffect(() => {
    // Add an event listener to update showDate on window resize
    const handleResize = () => {
      setShowParalax(window.innerWidth >= 1170); // Set your desired width
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formRef.current[0].value;
    const email = formRef.current[1].value;
    const subject = formRef.current[2].value;
    const message = formRef.current[3].value;
    emailjs
      .send(
        "service_43xdbas",
        "template_jdtr4ku",
        {
          from_name: name,
          from_email: email,
          from_subject: subject,
          from_message: message,
        },
        "y_UzT6zRxPjYDzzCn"
      )
      .then(
        (response) => {
          setFormModalOpen(true);
          setModalContent("success");
          formRef.current[0].value = "";
          formRef.current[1].value = "";
          formRef.current[2].value = "";
          formRef.current[3].value = "";
        },
        (error) => {
          setFormModalOpen(true);
          setModalContent("error");
          formRef.current[0].value = "";
          formRef.current[1].value = "";
          formRef.current[2].value = "";
          formRef.current[3].value = "";
        }
      );
  };

  return (
    <>
      <div className="h-screen" id="Contact">
        <Parallax ref={ref} pages={showParalax ? 1.02 : 1.0}>
          <ParallaxLayer
            offset={0}
            speed={5}
            factor={1.5}
            style={{
              backgroundImage: `url("/assets/images/dunya2.png")`,
              backgroundPosition: "center",
              height: "1300px",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={5}
            factor={1.5}
            style={{
              backgroundPosition: "center",
              height: "1300px",
              background: "#0078ff",
              opacity: ".5",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <section>
              <div className="container max-w-10xl  lg:py-24 px-12 sm:px-28 md:px-36 lg:px-20 xl:px-32  ">
                <div className="bg-zinc-200 gap-4 md:gap-5 lg:gap-12 xl:gap-16 2xl:gap-20 grid grid-cols-1 lg:grid-cols-2 py-5 sm:py-7 lg:py-9 px-8 md:px-12 lg:px-16 rounded-xl">
                  <div>
                    <h2 className="text-xl md:text-2xl xl:text-2xll font-semibold mb-4 md:mb-6 xl:mb-8 hidden lg:block">
                      Send A Message
                    </h2>
                    <h2 className="text-xl md:text-2xl xl:text-2xll font-semibold mb-4 md:mb-6 xl:mb-8 block lg:hidden text-center lg:text-left">
                      Get in Touch
                    </h2>
                    <div>
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        method="POST"
                        action=""
                        className="flex flex-col gap-3 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 "
                      >
                        <div>
                          <input
                            className="w-full py-1 px-2 border-2 rounded-md text-ssm md:text-sm xl:text-base"
                            type="text"
                            id="name"
                            name="from_name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div>
                          <input
                            className="w-full py-1 px-2 rounded-md border-2 text-ssm md:text-sm xl:text-base"
                            type="text"
                            id="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div>
                          <input
                            className=" w-full py-1 px-2 rounded-md border-2 text-ssm md:text-sm xl:text-base"
                            type="text"
                            id="subject"
                            name="from_subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div>
                          <textarea
                            className="w-full h-20 sm:h-24 md:h-32 xl:h-36 border-2 rounded-md p-2 text-ssm md:text-sm xl:text-base"
                            type="text"
                            id="message"
                            name="from_message"
                            placeholder="Write something here..."
                          />
                        </div>
                        <div className="">
                          <button
                            className=" text-sm md:text-base lg:text-base font-medium rounded-full py-1.5  2xl:py-2 px-4 md:px-6  bg-blue-500 text-white "
                            type="submit"
                          >
                            Send a message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div>
                    <h2 className=" text-xl md:text-2xl xl:text-2xll font-semibold mb-4 md:mb-6 xl:mb-8 hidden lg:block">
                      Get in Touch
                    </h2>
                    <div>
                      <div className="text-ssm md:text-sm xl:text-base 2xl:text-lg">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email or you can
                        contact me via these platforms.
                      </div>
                      <div className="flex mt-5 sm:mt-6 justify-center lg:justify-start gap-6">
                        <div>
                          <a
                            href="https://www.linkedin.com/in/can-kilicc-"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6  xl:w-7 xl:h-7  cursor-pointer hover:w-7 hover:h-7 sm:hover:w-8 sm:hover:h-8  xl:hover:w-9 xl:hover:h-9 ease-out transition-all" />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/cnkilic"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6  xl:w-7 xl:h-7  hover:w-7 hover:h-7 sm:hover:w-8 sm:hover:h-8  xl:hover:w-9 xl:hover:h-9  cursor-pointer ease-out transition-all" />
                          </a>
                        </div>
                        <div>
                          <a
                            href="mailto:canklc9598@gmail.com"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <AiFillMail className="w-5 h-5 sm:w-6 sm:h-6  xl:w-7 xl:h-7  hover:w-7 hover:h-7 sm:hover:w-8 sm:hover:h-8  xl:hover:w-9 xl:hover:h-9 cursor-pointer ease-out transition-all" />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.instagram.com/cn_klc_"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <AiFillInstagram className="w-5 h-5 sm:w-6 sm:h-6  xl:w-7 xl:h-7  hover:w-7 hover:h-7 sm:hover:w-8 sm:hover:h-8  xl:hover:w-9 xl:hover:h-9 cursor-pointer ease-out transition-all" />
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

      {formModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-zinc-200 rounded-lg p-8 ">
            <div className="flex flex-col items-center ">
              {modalContent === "success" ? (
                <BsFillBookmarkCheckFill className="h-16 w-16 mb-8 fill-green-600" />
              ) : (
                <AiFillCloseCircle className="h-16 w-16 mb-8 fill-red-600" />
              )}
              {modalContent === "success" ? (
                <p className="text-green-600 text-2xl font-bold mb-4">
                  Thank You!
                </p>
              ) : (
                <p className="text-red-600 text-2xl font-bold mb-4">Sorry! </p>
              )}
              {modalContent === "success" ? (
                <p className="text-gray-700 text-lg  mb-4">
                  Your message has been send succesfully!
                </p>
              ) : (
                <p className="text-gray-700 text-lg  mb-4">
                  Something went wrong please try again!!
                </p>
              )}

              {modalContent === "success" ? (
                <button
                  onClick={() => setFormModalOpen(false)}
                  className="text-gray-100  hover:bg-green-700 mt-4 bg-green-600 px-8 py-2 rounded-full"
                >
                  Close
                </button>
              ) : (
                <button
                  onClick={() => setFormModalOpen(false)}
                  className="text-gray-100  hover:bg-red-700 mt-4 bg-red-600 px-8 py-2 rounded-full"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
