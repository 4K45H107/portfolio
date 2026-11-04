import Link from "next/link";
import React from "react";
import { IoEye, IoLogoGithub, IoLogoYoutube } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  const { slug, title, subtitle, year, image, tech, github, preview, youtubeId } =
    project;
  const link = `/projects/${slug}`;

  return (
    <div>
      <Link href={link} className="block w-full rounded-lg shadow bg-magenta">
        {/* Fixed 16:10 frame so cards line up whatever the image's size */}
        <img
          className="w-full aspect-[16/10] object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </Link>
      <div className="text-center my-4">
        <Link href={link} className="text-xl font-semibold hover">
          {title}: {subtitle}
        </Link>
        <p className="text-sm text-white-3/[0.6] mt-1">{year}</p>
        {/* Tags wrap onto more lines on narrow screens */}
        <div className="flex flex-wrap justify-center">
          {tech.map((t, i) => (
            <span className="pr-4 py-2 text-magenta text-sm" key={i}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center mt-3 gap-x-4 w-full">
          {github && (
            <Link target="_blank" href={github} aria-label="GitHub">
              <IoLogoGithub />
            </Link>
          )}
          {preview && (
            <Link
              target="_blank"
              href={preview}
              aria-label={youtubeId ? "Demo video" : "Live demo"}
            >
              {youtubeId ? <IoLogoYoutube /> : <IoEye />}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
