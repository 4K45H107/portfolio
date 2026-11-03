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

      <div className="not-prose flex flex-wrap gap-x-6 gap-y-2">
        {[
          project.preview && { label: "Live Demo", href: project.preview },
          project.github && { label: "View Code", href: project.github },
          ...(project.links ?? []),
        ]
          .filter(Boolean)
          .map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              className="text-magenta font-semibold text-lg hover"
            >
              {link.label}
            </a>
          ))}
      </div>
      {project.previewNotice && (
        <p className="not-prose mt-3 text-red text-sm" role="note">
          ⚠ {project.previewNotice}
        </p>
      )}

      <h3>Short Description</h3>
      <p>{project.description}</p>

      {project.gallery && (
        <>
          <h3>Screenshots</h3>
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((shot) => (
              <figure key={shot.src}>
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full rounded-lg shadow"
                />
                <figcaption className="mt-2 text-sm text-white-3/[0.7]">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      )}

      {project.stack && (
        <>
          <h3>Tech Stack</h3>
          <dl className="not-prose grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-2 sm:gap-y-3">
            {project.stack.map((row) => (
              <React.Fragment key={row.label}>
                <dt className="text-green font-semibold mt-2 sm:mt-0">
                  {row.label}
                </dt>
                <dd>{row.value}</dd>
              </React.Fragment>
            ))}
          </dl>
        </>
      )}

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
