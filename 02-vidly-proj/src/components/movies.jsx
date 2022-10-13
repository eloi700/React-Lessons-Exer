import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  fStyle = {
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#00ff00'
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // this.setState({movies: movies}) OR when key & value are the same
    this.setState({ movies });
  };

  render() {
    const { length: count} = this.state.movies;

    if (count === 0)
      return <p style={{paddingTop: 30, fontWeight: 'bold', fontSize: '2rem', color: '#00ff00'}}>There are no movies in the database.</p>;
    return (
      <>
        <p style={this.fStyle}>Showing { count } movie/s in the database.</p>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>
                <i className='fa fa-trash-o'></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
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
      </>
    );
  }
}

export default Movies;
