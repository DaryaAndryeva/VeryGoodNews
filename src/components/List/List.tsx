import { useState } from "react";
import { News } from "../../pages/Main/Main";
import { Card } from "../Card";
import arrow from "../../assets/images/next-arrow.svg";
import ReactPaginate from "react-paginate";
import styles from "./List.module.scss";

const OFFSET = 10;

interface ListProps {
  news: News[];
}

export const List = ({ news }: ListProps): JSX.Element => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + OFFSET;
  const currentItems = news.slice(itemOffset, endOffset);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * OFFSET) % (news?.length || 0);
    setItemOffset(newOffset);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["list"]}>
        {currentItems?.map((news, index) => (
          <Card news={news} key={index} />
        ))}
      </div>
      {news.length > OFFSET && (
        <ReactPaginate
          containerClassName={styles["pagination"]}
          pageClassName={styles["page-item"]}
          activeClassName={styles["active"]}
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(news?.length / OFFSET)}
          nextLabel={
            <div className={styles["arrow-next"]}>
              {itemOffset < news.length - OFFSET && (
                <img src={arrow} alt="img" />
              )}
            </div>
          }
          previousLabel={
            <div className={styles["arrow-prev"]}>
              {!!itemOffset && <img src={arrow} alt="img" />}
            </div>
          }
          initialPage={0}
          renderOnZeroPageCount={null}
          disableInitialCallback={true}
        />
      )}
    </div>
  );
};
