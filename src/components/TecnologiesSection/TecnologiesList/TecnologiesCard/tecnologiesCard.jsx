import styles from "./style.module.css";
export const TecnologiesCard = ({ list }) => {
  return (
    <li className={styles.technologyCard}>
      <img src={list.img} alt={list.name} />
      <h3 className="title sm">{list.name}</h3>
    </li>
  );
};
