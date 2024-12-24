import { motion } from "framer-motion";
import profileImage from "../../assets/images/20241103_110527_image_repair_1735063740294.jpg";

const Banner = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <motion.h2
            className="text-2xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello I'm
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Tayyab Ameri Turan
          </motion.h1>
          <motion.div
            className="text-4xl md:text-5xl font-semibold text-blue-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Web <span className="typing">Developer</span>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
    </section>
  );
};

export default Banner;
