#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("tmdb")
  .description("CLI to fetch movies from TMDB")
  .version("1.0.0");

program
  .command("test")
  .description("Test command")
  .action(() => {
    console.log("CLI works 🚀");
  });

program.parse(process.argv);