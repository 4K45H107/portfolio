import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  // The first project is shown large; the rest go in a two-column grid.
  const [featured, ...rest] = projects;

  return (
    <div className="min-h-screen center py-16" id="projects">
      <div className="container">
        <SectionHeader
          icon={"/images/projects.png"}
          header={"Project Showcase"}
          color={"magenta"}
        />

        <ProjectCard project={featured} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 mt-0 xl:mt-12">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
