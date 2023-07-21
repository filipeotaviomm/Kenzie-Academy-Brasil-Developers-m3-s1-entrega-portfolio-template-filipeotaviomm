import styles from "./style.module.css";
import { technologies } from "../../../data/technologies";
import { TecnologiesCard } from "./TecnologiesCard/tecnologiesCard";

export const TecnologiesList = () => {
  return (
    <ul className={styles.containerCards}>
      {technologies.map((technology) => (
        <TecnologiesCard key={technology.id} list={technology} />
      ))}
    </ul>
  );
};
