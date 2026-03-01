import React from 'react'

const MovieCard = ({ movie: 
  { title, vote_average, poster_path, release_date, original_language }, isWatchlisted=false
}) => {
  return (
    <div className="movie-card">
      <img 
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-movie.png"} 
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>

          <button
            type="button"
            className="add-to-watchlist ml-auto inline-flex items-center justify-center"
            aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
          >
            <img
              src={isWatchlisted ? "/icons/heart-filled.svg" : "/icons/heart.svg"}
              alt=""
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard