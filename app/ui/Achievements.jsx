import React from "react";
import SectionHeader from "./SectionHeader";

const groups = [
  {
    heading: "Leadership & Service",
    items: [
      {
        title: "Program Committee Chair",
        detail: "IEEE BUET Student Branch Chapter",
        year: "2024 - Present",
      },
      {
        title: "Question Setter",
        detail: "Bangladesh Mathematical Olympiad (BdMO)",
        year: "2023, 2024",
      },
      {
        title: "Dataset Contributor",
        detail: "DL Sprint 3.0 (Bengali.AI Math Olympiad)",
        year: "2024",
      },
    ],
  },
  {
    heading: "Achievements",
    items: [
      {
        title: "Honorable Mention",
        detail: "CSE316 Microcontroller Project, BUET",
        year: "2023",
      },
      {
        title: "9th Place",
        detail: "National Physics Olympiad",
        year: "2015",
      },
      {
        title: "Winner",
        detail: "Regional Math Olympiad",
        year: "2011, 2012, 2014, 2015",
      },
    ],
  },
];

const Achievements = () => {
  return (
    <div className="center py-16" id="achievements">
      <div className="container">
        <SectionHeader
          icon={"/images/binary-code.png"}
          header={"Achievements & Leadership"}
          color={"green"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {groups.map((group) => (
            <div key={group.heading}>
              <p className="text-xl font-bold text-green mb-6">
                {group.heading}
              </p>
              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item.title + item.detail} className="flex gap-x-3">
                    <span className="text-green">▹</span>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-white-3/[0.8]">{item.detail}</p>
                      <p className="text-sm text-white-3/[0.6]">{item.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
