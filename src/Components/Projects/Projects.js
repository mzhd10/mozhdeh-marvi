import Reveal from "../Reveal/Reveal";
import "./Projects.css";
import { projects } from "../Data";
import { useState } from "react";
import List from "./List";
import Items from "./Items";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Projects = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };

  const filterProjects = (query) => {
    const filteredProjects = projects.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setMenuItems(filteredProjects);
  };
  return (
    <div>
      <section id="project" className="project section">
        <Reveal>
          <div className="container">
            <div className="projects-title">
              <h2>
                <span>My</span> Projects
              </h2>
              <hr />
            </div>

            <List
              list={navList}
              filterItems={filterItems}
              filterProjects={filterProjects}
            />

            <div className="project-container  ">
              <div>
                <Items projectItems={projectItems} />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Projects;
