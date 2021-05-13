import { FiMail } from "react-icons/fi";
import styles from "./Footer.module.css";
export function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.icon}>
        <FiMail size={20} color="#63a3ed" />
        <p>
           Suscribase al Boletin Digital
        </p>
      </div>
      <button className={styles.btn_sub}>Suscribirme</button>
      <a href="/" className={styles.a_desub}>
        Desubscribirse
      </a>
    </div>
  );
}
