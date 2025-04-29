import React from "react";
import Card from "./Card";

// Import des images directement
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: photo1,
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: photo2,
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: photo3,
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: photo4,
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-[#14532d]">
      <div className="max-w-[1135px] mx-auto pt-8 pb-24">
        <h1 className="self-start text-4xl font-bold pb-6 text-white" id="projects-section">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectsSection;
