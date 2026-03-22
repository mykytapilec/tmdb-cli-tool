#!/usr/bin/env node

import { Command } from "commander";
import { searchMovies } from "./api/tmdb";

const program = new Command();

program
  .name("tmdb")
  .description("CLI to fetch movies from TMDB")
  .version("1.0.0");

program
  .command("search <query>")
  .description("Search for movies")
  .action(async (query) => {
    try {
      const movies = await searchMovies(query);

      if (!movies.length) {
        console.log("No movies found");
        return;
      }

      movies.slice(0, 5).forEach((movie: any) => {
        console.log(`${movie.title} (${movie.release_date || "N/A"})`);
      });
    } catch {
      console.error("Error fetching movies");
    }
  });

program.parse(process.argv);