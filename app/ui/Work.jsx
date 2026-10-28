"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { cn } from "../utils/cn";

const works = [
  {
    tab: "Synesis IT PLC",
    title: "Software Engineer I",
    org: "Synesis IT PLC, Dhaka",
    period: "Apr 2025 - Present",
    points: [
      "Build backend and full-stack features for **Convay**, an enterprise video conferencing platform, and **Convay Drive**, its integrated cloud storage product.",
      "Designed a **policy-driven load balancing system** with the DevOps team that assigns meetings to servers and **scales capacity dynamically**.",
      "Strengthened authentication with **Microsoft sign-in through Auth0 and Azure AD**, reCAPTCHA, and **JWT-based token validation**.",
      "Engineered core Drive features on an open-source file management platform: **storage quotas**, **role-based file ownership**, unified session sync, and a **white-label desktop sync client**.",
      "Simplified the Drive architecture by **consolidating auth services**, removing a service-discovery dependency, and migrating to a **centralized MySQL database**.",
      "Redesigned the deployment pipeline for **profile-driven, multi-environment releases**, and manage client deployments and hotfixes.",
    ],
  },
  {
    tab: "Research",
    entries: [
      {
        title:
          "Unraveling Food Sentiments: Key Factors Influencing Bangladeshi Food Reviews (Thesis)",
        org: "Supervisor: Dr. Sadia Sharmin, Professor, BUET",
        period: "2024 - 2025",
        points: [
          "Undergraduate thesis identifying the key factors behind positive and negative food reviews in Bangladesh.",
          "Classified reviews by sentiment and analyzed the reasons behind each classification.",
        ],
      },
      {
        title: "Sentiments over Post-Revolution Street Wall Arts in Dhaka",
        org: "Supervisor: Dr. A.B.M. Alim Al Islam",
        period: "Sep 2024 - Present",
        points: [
          "Investigating public sentiment and recurring themes in the street wall art that emerged across Dhaka after the revolution.",
          "Built a self-collected dataset, combining manual labelling with LLM-generated annotations through prompt engineering.",
          "Applied thematic and sentiment analysis to interpret the messages and emotions expressed in the artworks.",
          "Areas: Human-Centered Computing, Thematic Analysis, Sentiment Analysis, LLMs.",
        ],
      },
    ],
  },
  {
    tab: "BUET",
    title: "B.Sc. in Computer Science and Engineering",
    org: "Bangladesh University of Engineering and Technology (BUET)",
    period: "Feb 2020 - Mar 2025",
    points: ["CGPA: 3.58/4.00"],
  },
];

// Renders **phrase** as a highlighted keyword.
const highlight = (text) =>
  text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-white-1">
        {part}
      </span>
    ) : (
      part
    )
  );

const Work = () => {
  const [active, setActive] = useState(0);
  // A tab shows either one entry or a list of entries (e.g. Research).
  const entries = works[active].entries ?? [works[active]];

  return (
    <div className="min-h-screen center py-16" id="work">
      <div className="container">
        <SectionHeader
          icon={"/images/work.png"}
          header={"Education & Experience"}
          color={"red"}
        />

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex md:block md:w-1/4 overflow-x-auto md:overflow-auto border-b md:border-b-0 md:border-r border-white-3/[0.3] mb-8 md:mb-0">
            {works.map((w, index) => (
              <p
                key={index}
                onClick={() => setActive(index)}
                className={cn(
                  "cursor-pointer py-3 mr-6 md:mr-4 text-lg font-semibold whitespace-nowrap transition duration-300 hover:text-red",
                  active === index && "border-b-2 border-red"
                )}
              >
                {w.tab}
              </p>
            ))}
          </div>

          <div className="md:w-3/4 md:pl-12 md:min-h-[24rem] space-y-10">
            {entries.map((work) => (
              <div key={work.title}>
                <h3 className="text-2xl font-bold">{work.title}</h3>
                <p className="mt-2 text-red">{work.org}</p>
                <p className="mb-4 text-white-3/[0.6]">{work.period}</p>
                <ul className="space-y-2 text-white-3">
                  {work.points.map((point, i) => (
                    <li key={i} className="flex gap-x-3">
                      <span className="text-red">▹</span>
                      <span>{highlight(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
