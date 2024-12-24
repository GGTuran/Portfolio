import { motion } from "framer-motion";

const Education = () => {
  return (
    <div>
      {/* Education Section */}
      <section id="education" className="py-10  text-white">
        <motion.h2
          className="text-center text-3xl font-semibold text-white mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {/* Education Item 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.ibb.co.com/Rpcp7q7/hstu-IW7cwn-q.jpg"
              alt="University Logo"
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Hajee Mohammad Danesh Science and Technology University,
                Dinajpur
              </h3>
              <p className="text-sm text-gray-400">
                B.Sc. (Engineering) in Electronics and Communication Engineering
              </p>
              <p className="text-sm text-gray-500">January 2022 - Present</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="bg-blue-600 text-xs text-white px-3 py-1 rounded-full">
                  leadership
                </span>
                <span className="bg-blue-600 text-xs text-white px-3 py-1 rounded-full">
                  networking
                </span>
                <span className="bg-blue-600 text-xs text-white px-3 py-1 rounded-full">
                  team management
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;
