import dotenv from "dotenv";

dotenv.config();

export const env = {
  TMDB_API_TOKEN: process.env.TMDB_API_TOKEN!,
  TMDB_BASE_URL: process.env.TMDB_BASE_URL!,
};