import React, { createContext } from 'react'

const MovieContext = createContext({
  watchlist: [],
  movie: {},
  title: '',
  handleInputChange: () => { },
  handleSearchMovie: () => { },
  handleAddToWatchlist: () => { },
  handleDeleteMovie: () => { }
})

export default MovieContext
