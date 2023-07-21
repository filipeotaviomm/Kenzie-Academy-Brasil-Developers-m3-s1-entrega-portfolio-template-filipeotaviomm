import styles from "./style.module.css";
import GitHubIcon from "../../../../assets/git-icon.png";

export const ProjectsCard = ({ list }) => {
  return (
    <li className={styles.card}>
      <div className={styles.titleAlign}>
        <h3 className="text sm">{list.name}</h3>
        <img src={GitHubIcon} alt="GitHub Icon" />
      </div>
      <p className="paragraph">{list.description}</p>
      <button className="saibaMaisProjects">Saiba mais</button>
    </li>
  );
};
