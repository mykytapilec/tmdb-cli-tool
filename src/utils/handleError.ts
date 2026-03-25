import chalk from "chalk";

export function handleError(error: any) {
  if (error.response) {
    if (error.response.status === 404) {
      console.error(chalk.red("Not found"));
      return;
    }

    if (error.response.status === 401) {
      console.error(chalk.red("Invalid API key"));
      return;
    }

    console.error(chalk.red(`Error: ${error.response.status}`));
    return;
  }

  if (error.request) {
    console.error(chalk.red("Network error"));
    return;
  }

  console.error(chalk.red("Unexpected error"));
}