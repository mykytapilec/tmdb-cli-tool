#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
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
        console.log(chalk.yellow("No movies found"));
        return;
      }

      movies.slice(0, 5).forEach((movie: any, index: number) => {
        const title = chalk.cyan.bold(movie.title);
        const year = movie.release_date
          ? movie.release_date.split("-")[0]
          : "N/A";
        const rating = chalk.green(movie.vote_average?.toString() || "N/A");
        const date = chalk.gray(movie.release_date || "N/A");

        console.log(`${chalk.magenta(`\n#${index + 1}`)} 🎬 ${title} (${year})`);
        console.log(`⭐ Rating: ${rating}`);
        console.log(`📅 Release: ${date}`);
      });
    } catch {
      console.error(chalk.red("Error fetching movies"));
    }
  });

program.parse(process.argv);