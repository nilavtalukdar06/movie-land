# MovieLand - Movie Search Application

A React-based movie search application that allows users to search for movies using the OMDB API.

## Features

- Search movies by title
- Display movie posters, titles, years, and types
- Responsive movie card grid layout
- Fallback image for missing movie posters
- Initial load with "Avengers" movies

## Tech Stack

- React (v19)
- Vite
- OMDB API
- ESLint for code quality

## Prerequisites

- Bun and Node Js
- OMDB API key
- Modern web browser

## Environment Setup

Create a `.env` file in the root directory with:

```env
VITE_API_KEY=your_omdb_api_key
VITE_OMDB_ID=your_omdb_id
```

## Installation

1. Clone the repository

```bash
git clone [repository-url]
cd movie-app
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

## Project Structure

```
movie-app/
├── src/
│   ├── components/
│   │   └── MovieCard.jsx    # Movie card component
│   ├── App.jsx             # Main application component
│   └── App.css            # Styles
├── package.json
└── README.md
```

## API Integration

The application uses the OMDB API for fetching movie data. The API calls are made using the fetch API with error handling.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [ISC License](LICENSE).
