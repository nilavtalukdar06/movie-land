import React, { useEffect } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const ID = import.meta.env.VITE_OMDB_ID;
const URL = `http://www.omdbapi.com?apiKey=${API_KEY}&i=${ID}`;

const fetchData = async (title) => {
  try {
    const response = await fetch(`${URL}&s=${title}`, { method: "GET" });
    if (!response.ok) {
      console.log("Some error occurred");
      return;
    }
    const data = await response.json();
    console.log(data.Search);
  } catch (error) {
    console.log(`Error fetching data, error: ${error}`);
  }
};

const App = () => {
  useEffect(() => {
    fetchData("Avengers");
  }, []);

  return (
    <section className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Spiderman"
          onChange={() => {}}
        />
        <img src="/search.svg" alt="Search Icon" onClick={() => {}} />
      </div>

      <div className="container"></div>
    </section>
  );
};

export default App;
