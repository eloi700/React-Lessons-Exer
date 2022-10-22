import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
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
  componentDidMount(){
    this.setState({movies: getMovies(), genres: getGenres() })
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // this.setState({movies: movies}) OR when key & value are the same
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);

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
        <div className='col-2'>
          <ListGroup items = {this.state.genres}>

          </ListGroup>
        </div>
        <div className='col'>
          <p style={this.fStyle}>Showing {count} movie/s in the database.</p>
          <table className='table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Like</th>
                <th>
                  <i className='fa fa-trash-o'></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td style={{ cursor: 'pointer' }}>
                    <Like liked={movie.liked} />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className='btn btn-danger btn-sm'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
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
