import axios from "axios";
import { News } from "../pages/Main/Main";

export const getNews = async (
  source?: string,
  keyword?: string,
  period?: { start_dt: string; end_dt: string },
  limit?: number,
  offset?: number
): Promise<{ status: number; data: News[]; total: number } | null> => {
  try {
    const response = await axios.get<{ results: News[]; count: number }>(
      `https://verygoodnews.online/api/news`,
      {
        params: {
          keyword,
          source,
          start_date: period?.start_dt,
          end_date: period?.end_dt,
          limit,
          offset,
        },
        headers: { "Content-Type": "application/json" },
      }
    );

    return {
      status: response.status,
      data: response.data.results || [],
      total: response.data.count,
    };
  } catch (e) {
    console.error("Ошибка при получении новостей:", e);
    return null; // Либо выбрасывать ошибку: throw e;
  }
};