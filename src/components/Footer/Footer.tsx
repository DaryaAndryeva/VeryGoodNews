import styles from "./Footer.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["row"]}>
        <div>Email:</div>
        <a href="mailto:daanandreeva@edu.hse.ru" className={styles["text"]}>
          daanandreeva@edu.hse.ru
        </a>
      </div>
      <div className={styles["row"]}>
        <div>Телефон:</div>
        <div className={styles["text"]}>+7 (915) 166-02-46</div>
      </div>
    </div>
  );
};
