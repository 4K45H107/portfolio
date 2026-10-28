import React from "react";
import SectionHeader from "./SectionHeader";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiDocker, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

const skills = [
  { icon: FaGolang, name: "Go" },
  { icon: FaJava, name: "Java" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: IoLogoJavascript, name: "JavaScript" },
  { icon: IoLogoReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: GrMysql, name: "MySQL" },
  { icon: SiDocker, name: "Docker" },
];

const toolbox = [
  {
    label: "Languages",
    items: "Go, Java, Python, JavaScript, TypeScript, C, C++, Bash",
  },
  {
    label: "Frameworks",
    items:
      "Spring Boot, React, Next.js, Node.js, Express.js, Electron.js, Tailwind CSS, PyTorch, JavaFX",
  },
  {
    label: "Architecture",
    items:
      "Microservices, REST APIs, gRPC, WebSockets, WebRTC, Load Balancing, Scalability",
  },
  {
    label: "Databases",
    items:
      "PostgreSQL, MySQL, MariaDB, MongoDB, Redis, Oracle, Firebase, BoltDB, Google Cloud Storage",
  },
  { label: "Security", items: "JWT, Auth0, Microsoft Azure AD, reCAPTCHA" },
  {
    label: "DevOps & Tools",
    items: "Docker, Jenkins, Harbor, RabbitMQ, Git, Linux, Postman, PostHog",
  },
];

const About = () => {
  return (
    <div className="min-h-screen center py-16" id="about">
      <div className="container">
        <SectionHeader
          icon={"/images/about.png"}
          header={"About Me"}
          color={"blue"}
        />

        <p className="text-md text-left lg:text-justify">
          I&apos;m a software engineer with 1.5 years of experience building
          backend and full-stack features for Convay, an{" "}
          <span className="text-blue font-bold">
            enterprise video conferencing
          </span>{" "}
          platform, and Convay Drive, its{" "}
          <span className="text-blue font-bold">cloud storage</span> product.
          I&apos;ve
          designed a{" "}
          <span className="text-blue font-bold">
            policy-driven load balancing
          </span>{" "}
          system that assigns meetings to servers and scales them dynamically,
          integrated Microsoft login through Auth0 and Azure AD, and simplified
          the Drive architecture by consolidating auth services and moving to a
          centralized MySQL database. I graduated in Computer Science and
          Engineering from BUET, and I research{" "}
          <span className="text-blue font-bold">
            human-centered computing and sentiment analysis
          </span>
          , including LLM-assisted annotation through prompt engineering.
        </p>

        <div className="mt-8 ml-8 grid grid-cols-1 lg:grid-cols-2 gap-y-4">
          {skills.map(({ icon: Icon, name }) => (
            <div key={name} className="flex items-center gap-x-4">
              <Icon className="text-blue" size={"32px"} />
              <p className="">{name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-3">
          {toolbox.map(({ label, items }) => (
            <p key={label} className="flex flex-col sm:flex-row">
              <span className="sm:w-44 shrink-0 text-blue font-semibold">
                {label}
              </span>
              <span className="text-white-3/[0.9]">{items}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
