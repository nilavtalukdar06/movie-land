import React from "react";

const MovieCard = () => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>

      <div>
        <img
          src={movie1.Poster !== "N/A" ? movie1.Poster : "/notfound.avif"}
          alt={movie1.Title}
          className="poster"
        />
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
