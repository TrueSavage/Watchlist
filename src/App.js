import React, { Component } from 'react'
import MovieForm from './components/MovieForm'
import MovieCard from './components/MovieCard'
import MovieWatchlist from './components/MovieWatchlist'
import MovieContext from './utils/MovieContext'
import axios from 'axios'

class App extends Component {

  state = {
    watchlist: [],
    movie: {},
    title: '',
    handleInputChange: ({ target }) => {
      this.setState({ [target.name]: target.value })
    },
    handleSearchMovie: event => {
      event.preventDefault()
      axios.get(`https://www.omdbapi.com/?t=${this.state.title}&apikey=trilogy`)
        .then(({ data: movie }) => {
          console.log(movie)
          this.setState({ movie, title: '' })
        })
    },
    handleAddToWatchlist: () => {
      let watchlist = JSON.parse(JSON.stringify(this.state.watchlist))
      watchlist.push(this.state.movie)
      this.setState({ watchlist, movie: {} })
    },
    handleDeleteMovie: i => {
      let watchlist = JSON.parse(JSON.stringify(this.state.watchlist))
      watchlist.splice(i, 1)
      this.setState({ watchlist })
    }
  }


  render() {
    return (
      <MovieContext.Provider value={this.state}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="jumbotron">
                <h1 class="display-4">Watchlist App</h1>
                <p class="lead">Search for your favorite movies and add them to a watchlist</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4>Search For A Movie</h4>
              <MovieForm />
              {this.state.movie.Title ?
                (
                  <MovieCard />
                ) : null}
            </div>
            <div className="col-md-6">
              <h4>Your Watchlist</h4>
              <MovieWatchlist />
            </div>
          </div>
        </div>
      </MovieContext.Provider>
    )
  }
}

export default App
