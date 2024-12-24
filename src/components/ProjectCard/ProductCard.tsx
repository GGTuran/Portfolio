import { Link } from "react-router-dom";

import { Github, Globe } from "lucide-react";
import { Button } from "../ui/button";

const ProjectCard = ({ project }: any) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-5 flex flex-col items-center">
      {/* Project Image */}
      <img
        src={project?.image}
        alt={project?.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {/* Project Title */}
      <h3 className="text-lg font-bold mb-2">{project?.name}</h3>
      {/* Project Description */}
      <p className="text-sm text-gray-300 mb-4 text-center">
        {project?.description}
      </p>
      {/* Buttons */}
      <div className="flex space-x-6 items-center">
        <div className="flex space-x-2">
          {" "}
          <Link to={project?.liveSite}>
            <Globe></Globe>
          </Link>
          <Link to={project?.clientCode}>
            <Github></Github>
          </Link>
        </div>
        <Link to={`projects/${project?._id}`}>
          <Button>Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
