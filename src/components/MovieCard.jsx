import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { favorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorited = favorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();

    if (favorited) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorited ? "active" : ""}`}
            onClick={onFavoriteClick}
            aria-label="Add to favorites"
          >
            ♥
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
