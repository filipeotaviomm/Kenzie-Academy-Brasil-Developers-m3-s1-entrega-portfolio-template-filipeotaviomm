import Banner from "../../assets/banner-img.png";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className="section-padding">
      <div className={`container ${styles.flexBox}`}>
        <div className={styles.contentLeft}>
          <p className="paragraph purple">JOSÉ DA SLVA</p>
          <h1 className="title lg">Bem vindo ao meu portifólio</h1>
          <p className="paragraph">Uma frase interessante sobre mim</p>
          <button className="anchors btn">Saiba mais</button>
        </div>
        <img className={styles.imgRight} src={Banner} alt="Banner Image" />
      </div>
    </section>
  );
};
