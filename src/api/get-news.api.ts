import axios from "axios";
import { News } from "../pages/Main/Main";

export const getNews = async (
  source?: number,
  keyword?: string,
  period?: { start_dt: string; end_dt: string }
): Promise<{ status: number; data: News[] } | null> => {
  try {
    const response = await axios.get<News[]>(
      `https://verygoodnews.online/api/news`,
      {
        params: {
          keyword,
          source,
          start_date: period?.start_dt,
          end_date: period?.end_dt,
        },
        headers: { "Content-Type": "application/json" },
      }
    );

    return {
      status: response.status,
      data: response.data || [],
    };
  } catch (e) {
    console.error("Ошибка при получении новостей:", e);
    return null; // Либо выбрасывать ошибку: throw e;
  }
};
