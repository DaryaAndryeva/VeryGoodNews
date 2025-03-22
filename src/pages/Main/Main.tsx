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
  const [news, setNews] = useState<News[]>();
  const [sources, setSources] = useState<Sourse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sortedNews = [...(news || [])].sort(
    (a, b) =>
      new Date(b.publication_date).getTime() -
      new Date(a.publication_date).getTime()
  );

  const onSearch = async ({ sources, query, period }: SearchParams) => {
    setIsLoading(true);

    if (!sources?.length) {
      getNews(undefined, query, {
        start_dt: new Date(period.start_dt.setHours(0, 0, 0, 0)).toISOString(),
        end_dt: new Date(period.end_dt.setHours(23, 59, 59, 0)).toISOString(),
      })
        .then((res) => {
          setNews(res?.data || []);
        })
        .finally(() => setIsLoading(false));
      return;
    }

    try {
      const responses = await Promise.all(
        sources.map((source) =>
          getNews(source.value, query, {
            start_dt: new Date(
              period.start_dt.setHours(0, 0, 0, 0)
            ).toISOString(),
            end_dt: new Date(
              period.end_dt.setHours(23, 59, 59, 0)
            ).toISOString(),
          })
        )
      );

      const newsList = responses.flatMap((res) => res?.data || []);

      setNews(newsList);
    } catch (error) {
      console.error("Ошибка при загрузке новостей:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);

    getNews(undefined, undefined, {
      start_dt: new Date(sevenDaysAgo.setHours(0, 0, 0, 0)).toISOString(),
      end_dt: new Date(today.setHours(23, 59, 59, 0)).toISOString(),
    })
      .then((res: any) => {
        setNews(res?.data || []);
      })
      .finally(() => setIsLoading(false));

    getSourses().then((res: any) => {
      setSources(res?.data || []);
    });
  }, []);

  return (
    <div className={styles["main"]}>
      <View>
        <Header />
        <Filters onSearch={onSearch} sourses={sources} isLoading={isLoading} />
        {!!sortedNews?.length && <List news={sortedNews || []} />}
        <Footer />
      </View>
    </div>
  );
};
