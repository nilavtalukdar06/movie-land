import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;
const ID = import.meta.env.VITE_OMDB_ID;
const URL = `http://www.omdbapi.com?apiKey=${API_KEY}&i=${ID}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (title) => {
    try {
      const response = await fetch(`${URL}&s=${title}`, { method: "GET" });
      if (!response.ok) {
        console.log("Some error occurred");
        return;
      }
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.log(`Error fetching data, error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData("Avengers");
  }, []);

  return (
    <section className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <img
          src="/search.svg"
          alt="Search Icon"
          onClick={() => {
            fetchData(searchTerm);
          }}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </section>
  );
};

export default App;
