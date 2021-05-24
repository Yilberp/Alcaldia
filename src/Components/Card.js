import styles from "./Card.module.css";
export function Card(props) {
  const { img, title, url } = props;
  return (
    <div className={styles.card}>
      <a href={url} className={styles.card__a}>
        <div className={styles.card__a_img}>
          <img className={styles.card__img} src={img} alt=" " />
        </div>
        <div>
          <h4 className={styles.card__title}>{title}</h4>
        </div>
      </a>
    </div>
  );
}
