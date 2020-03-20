import React from 'react'
import MovieContext from '../../utils/MovieContext'

const MovieForm = () => {
  return (
    <MovieContext.Consumer>
      {
        ({ title, handleInputChange, handleSearchMovie }) => (
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={handleInputChange} />
            </div>
            <button className="btn btn-primary" onClick={handleSearchMovie}>Search Movie</button>
          </form>
        )
      }
    </MovieContext.Consumer>

  )
}

export default MovieForm
