import React from 'react'

const MovieCard = ({ movie: 
  { id, title, vote_average, poster_path, release_date, original_language }, isWatchlisted=false, onToggleWatchlist
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
            className="add-to-watchlist"
            onClick={() => onToggleWatchlist?.(id)}
            aria-pressed={isWatchlisted}
            aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
          >
              <img
                src={isWatchlisted ? "/heart-solid.svg" : "/heart-outline.svg"}
                alt={isWatchlisted ? "Watchlisted" : "Not watchlisted"}
                className="h-6 w-6 transition-all duration-200 ease-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
              />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard