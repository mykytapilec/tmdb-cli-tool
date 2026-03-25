#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { searchMovies, getTrendingMovies, getMovieDetails } from "./api/tmdb";
import { handleError } from "./utils/handleError";

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
        const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
        const rating = chalk.green(movie.vote_average?.toString() || "N/A");
        const date = chalk.gray(movie.release_date || "N/A");

        console.log(`${chalk.magenta(`\n#${index + 1}`)} 🎬 ${title} (${year})`);
        console.log(`⭐ Rating: ${rating}`);
        console.log(`📅 Release: ${date}`);
      });
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("trending")
  .description("Get trending movies")
  .action(async () => {
    try {
      const movies = await getTrendingMovies();

      if (!movies.length) {
        console.log(chalk.yellow("No trending movies found"));
        return;
      }

      movies.slice(0, 5).forEach((movie: any, index: number) => {
        const title = chalk.cyan.bold(movie.title);
        const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
        const rating = chalk.green(movie.vote_average?.toString() || "N/A");
        const date = chalk.gray(movie.release_date || "N/A");

        console.log(`${chalk.magenta(`\n#${index + 1}`)} 🔥 ${title} (${year})`);
        console.log(`⭐ Rating: ${rating}`);
        console.log(`📅 Release: ${date}`);
      });
    } catch (error) {
      handleError(error);
    }
  });

program
  .command("movie <id>")
  .description("Get movie details by ID")
  .action(async (id) => {
    try {
      const movie = await getMovieDetails(id);

      const title = chalk.cyan.bold(movie.title);
      const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
      const rating = chalk.green(movie.vote_average?.toString() || "N/A");
      const date = chalk.gray(movie.release_date || "N/A");
      const overview = movie.overview || "No description available";
      const language = movie.original_language?.toUpperCase() || "N/A";

      console.log(`\n🎬 ${title} (${year})`);
      console.log(`⭐ Rating: ${rating}`);
      console.log(`📅 Release: ${date}`);
      console.log(`🌍 Language: ${language}`);
      console.log(`\n📝 Overview:\n${overview}`);
    } catch (error) {
      handleError(error);
    }
  });

program.parse(process.argv);