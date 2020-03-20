import React from 'react'
import MovieContext from '../../utils/MovieContext'

const MovieWatchlist = () => {
  return (
    <MovieContext.Consumer>
      {
        ({ watchlist, handleDeleteMovie }) => (
          <ul className="list-group">
            {
              watchlist.map((movie, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  {movie.Title}
                  <button onClick={() => handleDeleteMovie(i)} className="btn btn-danger">x</button>
                </li>
              ))
            }
          </ul>
        )
      }
    </MovieContext.Consumer>

  )
}

export default MovieWatchlist
