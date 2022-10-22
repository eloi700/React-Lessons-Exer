import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: [], //Initializing it into empty array as it will get time until we get data from the server. Movies & genres should be undefined otherwise it will result into a Runtime Error.
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  fStyle = {
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#00ff00',
  };

  //this will be called when an instance of this component is rendered in the DOM
  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    // this.setState({ movies: getMovies(), genres: genres }); OR
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // this.setState({movies: movies}) OR when key & value are the same
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    if (count === 0)
      return (
        <p
          style={{
            paddingTop: 30,
            fontWeight: 'bold',
            fontSize: '2rem',
            color: '#00ff00',
          }}
        >
          There are no movies in the database.
        </p>
      );

    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          ></ListGroup>
        </div>

        <div className='col'>
          <p style={this.fStyle}>
            Showing {filtered.length} movie/s in the database.
          </p>

          <MoviesTable movies={movies} onDelete={this.handleDelete}/>

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default Movies;
