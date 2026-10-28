import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { getProject, projects } from "../../data/projects";

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Fahad Ahmed Akash`,
    description: project.subtitle,
  };
};

const ProjectPage = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <div className="container prose text-white-3 prose-h3:text-white-2 prose-h3:text-2xl prose-li:marker:text-magenta mb-32">
      <h3 className="text-4xl font-bold mt-20 flex gap-x-4">
        <Link href="/#projects" className="text-white-3">
          <IoArrowBack size={28} />
        </Link>
        <span>{project.title}</span>
      </h3>
      <p className="text-white-3/[0.8] -mt-2">
        {project.subtitle} · {project.year}
      </p>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg shadow my-8"
      />

      <p className="text-green font-semibold text-lg">Technologies Used</p>
      <p className="mb-6">{project.tech.join(", ")}</p>

      {project.preview && (
        <a
          href={project.preview}
          target="_blank"
          className="text-magenta font-semibold text-lg hover mr-6"
        >
          Live Demo
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className="text-magenta font-semibold text-lg hover"
        >
          View Code
        </a>
      )}

      <h3>Short Description</h3>
      <p>{project.description}</p>

      {project.sections.map((section) => (
        <React.Fragment key={section.heading}>
          <h3>{section.heading}</h3>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectPage;
