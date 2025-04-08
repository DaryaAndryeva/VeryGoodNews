import { useEffect, useState } from "react";
import { Filters } from "../../components/Filters";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { View } from "../../components/View";
import { getNews, getSourses } from "../../api";
import { Option } from "../../components/Filter/Filter";
import styles from "./Main.module.scss";

export interface News {
  id: number;
  title: string;
  publication_date: string;
  source: number;
  url: string;
}

export interface DatePeriod {
  start_dt: Date;
  end_dt: Date;
}

export interface SearchParams {
  sources: Option[];
  query?: string;
  period: DatePeriod;
}
export interface Sourse {
  id: number;
  name: string;
  url: string;
}

export const Main = (): JSX.Element => {
  const end_dt = new Date();
  const start_dt = new Date("2025/03/31");

  const [news, setNews] = useState<News[]>();
  const [sources, setSources] = useState<Sourse[]>([]);
  const [filters, setFilters] = useState<SearchParams>({
    sources: [],
    query: undefined,
    period: {
      start_dt,
      end_dt,
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  const sortedNews = [...(news || [])].sort(
    (a, b) =>
      new Date(b.publication_date).getTime() -
      new Date(a.publication_date).getTime()
  );

  const onSearch = async () => {
    const { sources, query, period } = filters;

    setIsLoading(true);

    getNews(
      sources.map((source) => source.value).join(),
      query,
      {
        start_dt: new Date(period.start_dt.setHours(0, 0, 0, 0)).toISOString(),
        end_dt: new Date(period.end_dt.setHours(23, 59, 59, 0)).toISOString(),
      },
      10,
      itemOffset
    )
      .then((res) => {
        setNews(res?.data || []);
        setTotalCount(res?.total || 0);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getSourses().then((res: any) => {
      setSources(res?.data || []);
    });
  }, []);

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset]);

  return (
    <div className={styles["main"]}>
      <View>
        <Header />
        <Filters
          onSearch={onSearch}
          setFilters={setFilters}
          sourses={sources}
          isLoading={isLoading}
        />
        {!!sortedNews?.length && (
          <List
            news={sortedNews || []}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
            totalCount={totalCount}
          />
        )}
        <Footer />
      </View>
    </div>
  );
};