import AboutMeSection from "@/components/About/AboutMeSection";
import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blog/Blog";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import ProjectCard from "@/components/ProjectCard/ProductCard";
import Skills from "@/components/Skills/Skills";
import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import Contact from "./Contact";

const Home = () => {
  const { data: projectsData } = useGetAllProjectsQuery("");

  const projects = projectsData?.data;

  return (
    <div className="m-10 space-y-6">
      <Banner />
      <AboutMeSection />
      <Skills />
      <div>
        <h1 className="text-center text-3xl font-semibold text-white mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects?.map((project: any) => (
            <ProjectCard project={project} key={project?._id} />
          ))}
        </div>
      </div>
      <Education />
      <Blog />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
