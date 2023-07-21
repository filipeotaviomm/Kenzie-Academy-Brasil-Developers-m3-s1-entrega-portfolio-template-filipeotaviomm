import Logo from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.headerContainer}>
          <img src={Logo} alt="Logo portifólio" />
          <div className={styles.anchorsGap}>
            <a className="anchors" href="#">
              Sobre
            </a>
            <a className="anchors" href="#">
              Stack
            </a>
            <a className="anchors" href="#">
              Projetos
            </a>
          </div>
          <a className="anchors btn" href="#">
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};
