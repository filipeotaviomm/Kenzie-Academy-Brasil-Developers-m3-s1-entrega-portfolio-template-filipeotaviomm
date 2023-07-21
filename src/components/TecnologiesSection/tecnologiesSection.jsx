import styles from "./style.module.css";
import { TecnologiesList } from "./TecnologiesList/tecnologiesList";

export const TecnologiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className={`title md ${styles.technologyTitle}`}>Tecnologias</h2>
        <div>
          <TecnologiesList />
        </div>
      </div>
    </section>
  );
};
