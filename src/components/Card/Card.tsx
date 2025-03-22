import { News } from "../../pages/Main/Main";
import { format } from "date-fns";
import styles from "./Card.module.scss";

interface CardProps {
  news: News;
}

export const Card = ({ news }: CardProps): JSX.Element => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>{news.title}</div>
      <div className={styles["info"]}>
        <a
          href={news.url}
          target="_blank"
          rel="noreferrer"
          className={styles["info-link"]}>
          {news.url}
        </a>
        <div className={styles["info-date"]}>
          {format(new Date(news.publication_date), "dd.MM.yyyy")}
        </div>
      </div>
    </div>
  );
};
