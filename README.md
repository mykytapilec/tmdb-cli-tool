# TMDB CLI Tool

Simple CLI tool to search and explore movies using **The Movie Database (TMDB) API**.
Built with **Node.js**, **TypeScript**, and **Commander**.

---

## Features

* `tmdb search <query>` — search for movies
* `tmdb trending` — get trending movies
* `tmdb movie <id>` — get detailed movie information

---

## Tech Stack

* Node.js
* TypeScript
* Commander
* Axios
* Chalk
* Dotenv

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mykytapilec/tmdb-cli-tool.git
cd tmdb-cli-tool
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
TMDB_API_TOKEN=your_api_token_here
TMDB_BASE_URL=https://api.themoviedb.org/3
```

4. Build the project:

```bash
npm run build
```

5. Link CLI globally:

```bash
npm link
```

---

## Usage

### Search movies

```bash
tmdb search "batman"
```

### Get trending movies

```bash
tmdb trending
```

### Get movie details

```bash
tmdb movie 550
```

---

## Example Output

```bash
#1 🎬 Batman Begins (2005)
⭐ Rating: 8.2
📅 Release: 2005-06-10
```

```bash
🎬 Fight Club (1999)
⭐ Rating: 8.4
📅 Release: 1999-10-15
🌍 Language: EN

📝 Overview:
An insomniac office worker and a soap maker form an underground fight club...
```

---

## Environment Variables

| Variable       | Description              |
| -------------- | ------------------------ |
| TMDB_API_TOKEN | TMDB API v4 Bearer token |
| TMDB_BASE_URL  | TMDB API base URL        |

---

## Project URL

https://roadmap.sh/projects/tmdb-cli

---

## Notes

* Uses TMDB API for fetching movie data
* Requires API token from TMDB
* For educational and personal use

---

## License

MIT
