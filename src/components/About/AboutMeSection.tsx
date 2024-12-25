import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMeSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 relative">
      <div className="container mx-auto px-6 md:px-16 flex flex-col items-center space-y-6">
        {/* Heading */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-300 text-center text-base md:text-lg lg:w-2/3 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am an undergraduate student pursuing a degree in Electronics and
          Communication Engineering (ECE), with a budding interest in web
          development and a strong drive to learn and grow. Although I am
          relatively new to this field, I am deeply committed to the learning
          process. I may not be the fastest learner, but I approach every
          challenge with persistence and determination. When I set my mind to
          learning or solving a problem, I am driven by an unwavering focus and
          a relentless pursuit of completion. This mindset, combined with my
          academic background, equips me with the adaptability and resilience
          needed to thrive in dynamic environments. I am eager to explore new
          opportunities, enhance my skills, and contribute meaningfully to
          projects and teams.
        </motion.p>

        {/* Resume Button */}
        <Link
          to="https://drive.google.com/file/d/1WNRMXEMBxS99dDrarA9wvERozGWQwbE6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My Resume
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default AboutMeSection;
