import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get('https://api.themoviedb.org/3/movie/550?api_key=281dade4a7bc0d1faee0b1d0cf191172');

    this.setState({movies: response.data });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>

        {/* <ul>
          {this.state.movies.map(movies => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default MoviesPage;