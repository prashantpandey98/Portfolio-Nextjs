"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "Made a responsive Portfolio website using Next.js, scss and Tailwind Css. Used dynamic animations and framer-motion for better aesthetics.",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prashantpandey98/Portfolio-Nextjs",
    previewUrl: "https://prashantpandey98.vercel.app/",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description:
      "A responsive and attractive UI for a food ordering website made using React.js and Bootstrap. Integrated a dynamic cart where we can add and remove dishes. Used Context API for handling complex cart logic and state.",
    image: "/images/projects/meal.jpg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/prashantpandey98/Front-end-React/tree/main/Restaurant_App",
    previewUrl: "https://feastkaro.netlify.app/",
  },
  {
    id: 3,
    title: "E-Mail Application",
    description:
      "A mailing React application which keeps a track of your mails. It has 'Inbox', 'Outbox' which are managed by Redux and integrated with Firebase for authentication and storing data.",
    image: "/images/projects/mailBox.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prashantpandey98/mail-box",
    previewUrl: "https://u-mail-box-client.netlify.app/",
  },
  {
    id: 4,
    title: "Expense Tracker Application",
    description:
      "A very useful React application to keep a track of your daily expenses. We can add, delete and edit the expenses. Also has premium features where we can download the expenses and switch between dark and light mmode. Used Redux to manage the data and state of the components.",
    image: "/images/projects/expense.jpg",
    tag: ["All", "Web"],
    gitUrl: " https://github.com/prashantpandey98/Expense-Tracker",
    previewUrl: "https://expense-manager-pro.netlify.app/",
  },
  {
    id: 5,
    title: "E-Commerce Application",
    description:
      "A scalable and user-specific E-Commerce application made using React, Bootstrap, CSS and Firebase api.",
    image: "/images/projects/eCom.jpg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/prashantpandey98/E-Commerce-Website/tree/main/e-commerce-website",
    previewUrl: "https://shopcrazy.netlify.app/",
  },
  {
    id: 6,
    title: "Text-Utils App",
    description:
      "A project using React.js that let's you modify and alter the entered texts in a number of ways.",
    image: "/images/projects/textUtils.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prashantpandey98/React_app-TextUtils",
    previewUrl: "https://text-playground.netlify.app/",
  },
  {
    id: 7,
    title: "Spotify Main Page Clone",
    description:
      "A simple and pixle perfect clone of spotify main page using vanilla CSS.",
    image: "/images/projects/spotify.jpg",
    tag: ["All", "CSS"],
    gitUrl:
      "https://github.com/prashantpandey98/Projects/tree/main/Spotify%20MainPage",
    previewUrl: "/images/projects/spotify.jpg",
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
    initial: { y: 70, opacity: 0 },
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
