import { News } from "../../pages/Main/Main";
import { Card } from "../Card";
import arrow from "../../assets/images/next-arrow.svg";
import ReactPaginate from "react-paginate";
import styles from "./List.module.scss";

const OFFSET = 10;

interface ListProps {
  news: News[];
  itemOffset: number;
  setItemOffset: (offset: number) => void;
  totalCount: number;
}

export const List = ({
  news,
  itemOffset,
  setItemOffset,
  totalCount,
}: ListProps): JSX.Element => {
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * OFFSET;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["list"]}>
        {news?.map((item, index) => (
          <Card news={item} key={index} />
        ))}
      </div>
      {totalCount > 10 && (
        <ReactPaginate
          containerClassName={styles["pagination"]}
          pageClassName={styles["page-item"]}
          activeClassName={styles["active"]}
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(totalCount / OFFSET)}
          nextLabel={
            <div className={styles["arrow-next"]}>
              {itemOffset < totalCount - OFFSET && (
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