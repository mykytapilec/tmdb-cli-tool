import axios from "axios";
import { env } from "../config/env";

const api = axios.create({
  baseURL: env.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${env.TMDB_API_TOKEN}`,
  },
});

export const searchMovies = async (query: string) => {
  const response = await api.get("/search/movie", {
    params: { query },
  });

  return response.data.results;
};

export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};