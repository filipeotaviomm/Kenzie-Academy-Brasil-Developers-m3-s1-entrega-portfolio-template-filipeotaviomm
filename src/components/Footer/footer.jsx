import styles from "./style.module.css";
import Zap from "../../assets/whatsapp-icon.png";
import LinkedIn from "../../assets/linkedin-icon.png";
import GitHub from "../../assets/github-icon.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.gapping}>
            <h2 className="title md">Contato</h2>
            <div className={styles.images}>
              <img src={Zap} alt="Whatsapp Icon" />
              <img src={LinkedIn} alt="LinkedIn Icon" />
              <img src={GitHub} alt="GitHub Icon" />
            </div>
          </div>
          <div className={styles.footerParagraph}>
            <p className="paragraph">
              Todos os direitos reservados - José da Silva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
