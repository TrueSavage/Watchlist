import React from 'react'
import MovieContext from '../../utils/MovieContext'

const MovieCard = () => {
  return (
    <MovieContext.Consumer>
      {
        ({ movie: { Title, Director, Poster }, handleAddToWatchlist }) => (
          <div className="card">
            <img src={Poster} className="card-img-top" alt={Title} />
            <div className="card-body">
              <h5 className="card-title">{Title}</h5>
              <p className="card-text">Directed by {Director}</p>
              <button className="btn btn-success" onClick={handleAddToWatchlist}>Add To Watchlist</button>
            </div>
          </div>
        )
      }
    </MovieContext.Consumer>
    
  )
}

export default MovieCard
