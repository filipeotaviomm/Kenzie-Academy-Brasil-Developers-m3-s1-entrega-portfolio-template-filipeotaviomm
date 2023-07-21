import styles from "./style.module.css";
import { ProjectsList } from "./ProjectsList/projectsList";

export const ProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className={`title md ${styles.projectsTitle}`}>Projetos</h2>
        <ProjectsList />
      </div>
    </section>
  );
};
