"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2">
          <li>HTML 🌐</li>
          <li>CSS 🎨</li>
          <li>JavaScript 🚀</li>
          <li>React.js ⚛️</li>
          <li>Next.js 🌐</li>
          <li>Bootstrap 🅱️</li>
          <li>Tailwind 🌬️</li>
          <li>REST api 🌐</li>
        </ul>

        <ul className="list-disc pl-2">
          <li>Material UI 🎨</li>
          <li>OOPs 🔄</li>
          <li>git 🗂️</li>
          <li>GitHub 🐙</li>
          <li>Postman 📬</li>
          <li>Node.js 🛠️</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development Training at Sharpener.tech</li>
        <li>Bachelor of Arts, IGNOU</li>
        <li>Aircraft Maintenance Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <ol className="list-disc list-inside pl-2">
          {" "}
          LinkedIn Certifications : <li>HTML</li>
          <li>Cascading Style Sheet (CSS)</li>{" "}
          <li>Object-Oriented Programming (OOP)</li>
          <li>Microsoft Outlook</li>
        </ol>
        <ol className="list-disc list-inside pl-2">
          {" "}
          freeCodeCamp Certifications :
          <li>JavaScript Algorithms and Data Structures</li>
          <li>Responsive Web Design</li>
        </ol>
        <ol className="list-disc list-inside pl-2">
          {" "}
          HackerRank Certifications :<li>JavaScript (Basic)</li>
          <li>Problem Solving (Basic)</li>
        </ol>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Front End web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, HTML, CSS,
            Bootstrap, Tailwind, Material UI, Postman and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
