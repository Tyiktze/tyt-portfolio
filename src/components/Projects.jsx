//Grid of projects
import React from "react";
import ProjectCard from "./ProjectCard";

import angryBird from "../assets/images/Projects/AngryBird.jpg";
import minecraftHouse from "../assets/images/Projects/MinecraftHouse.jpg";
import nerd1 from "../assets/images/Projects/Nerd1.jpg";
import nerd2 from "../assets/images/Projects/Nerd2.jpg";
import nice from "../assets/images/Projects/Nice.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Angry Bird",
      description: "Very very realistic angry bird",
      image: angryBird,
    },
    {
      title: "Cool ahh House",
      description: "Cool ahh house that I built totally legit no cap",
      image: minecraftHouse,
    },
    {
      title: "My friend",
      description: "I like my friend he has aura",
      image: nerd1,
    },
    {
      title: "I dont even know why it's called projects",
      description: "This is my lecturer",
      image: nerd2,
    },
    {
      title: "Nice guy",
      description: "He's just a nice guy",
      image: nice,
    },
    {
      title: "Youtube",
      description:
        "Youtube clone that it's so secretive that uhh i dont got image cuz it too secret",
      image: "",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
