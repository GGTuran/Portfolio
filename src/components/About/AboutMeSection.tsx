import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMeSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto h-full px-4 md:px-20 flex flex-col items-center justify-center space-y-8">
        <motion.h2
          className="text-center text-3xl font-semibold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 text-center prose prose-sm mb-8"
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
        <Link to="https://drive.google.com/file/d/1WNRMXEMBxS99dDrarA9wvERozGWQwbE6/view?usp=sharing">
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8"
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
