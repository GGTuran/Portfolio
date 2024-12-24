import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="m-10 mt-3">
      {/* Get in Touch Section */}
      <section className="container text-white mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-semibold text-white mb-8">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Profile Image
          <div className=" mb-6 md:mb-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto"
            />
          </div> */}

          {/* Contact Information */}
          <div className="flex-1 md:ml-8">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <span className="mr-4">📞</span> +8801833844350
              </li>
              <li className="flex items-center">
                <span className="mr-4">📧</span>{" "}
                <a
                  href="mailto:tayyabamerituran@gmail.com"
                  className="hover:text-blue-400"
                >
                  tayyabamerituran@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-4">📍</span> Basherhat, Dinajpur, Bangladesh
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/tayyabamerituran/"
                className="px-4 py-2  text-white rounded-lg shadow "
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/GGTuran"
                className="px-4 py-2  text-white rounded-lg shadow "
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="text-white rounded-2xl">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5"
            >
              <div className="lg:col-span-2 lg:py-12">
                <h1 className="text-3xl text-left font-medium mb-2">
                  Contact Me
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-5"
                >
                  <a href="#" className="text-2xl font-medium ">
                    {" "}
                    0183 384 4350{" "}
                  </a>

                  <address className="mt-2 not-italic">
                    Basherhat, Dinajpur, Bangladesh
                  </address>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12"
              >
                <form action="#" className="space-y-4">
                  <div>
                    <label className="" htmlFor="name">
                      Name
                    </label>
                    <motion.input
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm text-black"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <div>
                      <label className="" htmlFor="email">
                        Email
                      </label>
                      <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="" htmlFor="phone">
                        Phone
                      </label>
                      <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                  >
                    <label className="" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      id="message"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
                    >
                      Send Enquiry
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
