"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "Project 2 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/prashantpandey98/Front-end-React/tree/main/Restaurant_App",
    previewUrl: "https://feastkaro.netlify.app/",
  },
  {
    id: 3,
    title: "E-Mail Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prashantpandey98/mail-box",
    previewUrl: "https://u-mail-box-client.netlify.app/",
  },
  {
    id: 4,
    title: "Expense Tracker Application",
    description: "Project 4 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: " https://github.com/prashantpandey98/Expense-Tracker",
    previewUrl: "https://expense-manager-pro.netlify.app/",
  },
  {
    id: 5,
    title: "E-Commerce Application",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/prashantpandey98/E-Commerce-Website/tree/main/e-commerce-website",
    previewUrl: "https://shopcrazy.netlify.app/",
  },
  {
    id: 6,
    title: "Text-Utils App",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prashantpandey98/React_app-TextUtils",
    previewUrl: "https://text-playground.netlify.app/",
  },
  {
    id: 7,
    title: "Spotify Main Page Clone",
    description: "Project 7 description",
    image: "/images/projects/6.png",
    tag: ["All", "CSS"],
    gitUrl: "/",
    previewUrl:
      "https://github.com/prashantpandey98/Projects/tree/main/Spotify%20MainPage",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CSS"
          isSelected={tag === "CSS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
