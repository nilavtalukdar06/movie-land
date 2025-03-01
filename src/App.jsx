import React, { useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const ID = import.meta.env.VITE_OMDB_ID;
const URL = `http://www.omdbapi.com?apiKey=${API_KEY}&i=${ID}`;

const App = () => {
  useEffect(() => {
    const fetchData = async (title) => {
      try {
        const response = await fetch(`${URL}&s=${title}`, { method: "GET" });
        if (!response.ok) {
          console.log("Some error occurred");
          return;
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(`Error fetching data, error: ${error}`);
      }
    };

    fetchData();
  }, []);

  return <div>MovieLand</div>;
};

export default App;
