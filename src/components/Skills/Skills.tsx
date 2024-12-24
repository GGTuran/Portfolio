import { motion } from "framer-motion";
import { useGetAllSkillsQuery } from "@/redux/features/skill/skillApi";
import { TSkill } from "@/types/skill.type";

const Skills = () => {
  const { data: skillsData } = useGetAllSkillsQuery("");
  const skills = skillsData?.data;

  // Framer Motion animation variants for each skill card
  const skillCardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden with opacity and translateY
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    whileHover: {
      scale: 1.1,
      rotate: 3,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    },
  };

  // Soft skills data
  const softSkills = [
    { name: "Networking", icon: "🌐" },
    { name: "Leadership", icon: "🤝" },
    { name: "Communication", icon: "💬" },
    { name: "Problem-Solving", icon: "🧩" },
    { name: "Teamwork", icon: "👥" },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        {/* Technical Skills Section */}
        <motion.h2
          className="text-center text-3xl font-semibold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Technologies
        </motion.h2>

        {/* Technical Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {skills?.map((skill: TSkill) => (
            <motion.div
              key={skill._id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center space-y-4 transition-transform"
              variants={skillCardVariants}
              whileHover="whileHover" // Hover animation
            >
              {/* Skill Image */}
              <motion.img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              />
              {/* Skill Name */}
              <motion.h3
                className="text-lg font-semibold"
                whileHover={{ color: "#4ADE80" }} // Change text color on hover
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.h2
          className="text-center text-3xl font-semibold text-white mt-5 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Soft Skills
        </motion.h2>

        {/* Soft Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {softSkills.map((softSkill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center space-y-4 transition-transform"
              variants={skillCardVariants}
              whileHover="whileHover" // Hover animation
            >
              {/* Soft Skill Icon */}
              <motion.div
                className="text-4xl"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                {softSkill.icon}
              </motion.div>
              {/* Soft Skill Name */}
              <motion.h3
                className="text-lg font-semibold"
                whileHover={{ color: "#4ADE80" }} // Change text color on hover
                transition={{ duration: 0.3 }}
              >
                {softSkill.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
