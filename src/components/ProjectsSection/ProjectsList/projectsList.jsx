import styles from "./style.module.css";
import { projects } from "../../../data/projects";
import { ProjectsCard } from "./ProjectsCard/projectsCard";

export const ProjectsList = () => {
  return (
    <ul className={styles.technologiesContainer}>
      {projects.map((project) => (
        <ProjectsCard key={project.id} list={project} />
      ))}
    </ul>
  );
};
