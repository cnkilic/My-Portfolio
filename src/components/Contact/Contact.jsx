import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram ,AiFillMail} from "react-icons/ai";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import emailjs from "@emailjs/browser";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("success");

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
      <div className="h-screen ">
        <Parallax ref={ref} pages={1.02}>
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
              background:"#0078ff",
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
            <section id="Contact">
              <div className="container max-w-10xl py-24 px-32  ">
                <div className="bg-zinc-200 grid grid-cols-2 py-9 px-16 rounded-xl">
                  <div>
                    <h2 className="text-3xl font-semibold mb-6">
                      Send A Message
                    </h2>
                    <div className="pr-16">
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        method="POST"
                        action=""
                      >
                        <div>
                          <input
                            className="w-full py-1 px-2 border-2 rounded-md"
                            type="text"
                            id="name"
                            name="from_name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div>
                          <input
                            className="w-full  py-1 px-2 rounded-md border-2 mt-5"
                            type="text"
                            id="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div>
                          <input
                            className=" w-full py-1 px-2 rounded-md border-2 mt-5"
                            type="text"
                            id="subject"
                            name="from_subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div>
                          <textarea
                            className="w-full h-36 border-2 rounded-md mt-5 p-2"
                            type="text"
                            id="message"
                            name="from_message"
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
                    <h2 className="text-3xl font-semibold mb-6">
                      Get in Touch
                    </h2>
                    <div>
                      <p className="text-lg">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                      <div className="flex mt-8">
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
                            href="https://github.com/cnkilic"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <FaGithub className="w-8 h-8 cursor-pointer hover:w-10 hover:h-10 ease-out transition-all" />
                          </a>
                        </div>
                        <div className="mr-6">
                          <a
                            href="mailto:canklc9598@gmail.com"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <AiFillMail className="w-8 h-8 cursor-pointer hover:w-10 hover:h-10 ease-out transition-all" />
                          </a>
                        </div>
                        <div className="mr-6">
                          <a
                            href="https://www.instagram.com/cn_klc_"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <AiFillInstagram  className="w-8 h-8 cursor-pointer hover:w-10 hover:h-10 ease-out transition-all" />
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
