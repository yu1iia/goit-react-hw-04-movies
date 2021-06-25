import React, { Component } from 'react';
import FilmsList from '../Components/FilmsList/FilmsList';

import moviesApi from '../api/movie-api';

class HomePage extends Component {
  state = {
    films: [],
    error: null,
  };

  componentDidMount() {
    // логику http-запроса подтягиваем из специально для этого созданого файла api->movies-api c різними методами
    moviesApi
      .fetchTrendingMovies()
      .then(({ results }) => {
        // console.log(results);

        this.setState({ films: [...results] });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        <h2 className="FilmsList_title">Trending today:</h2>

        {/* import component FilmsList в props которому передаем массив фильмов */}
        <FilmsList className="" films={this.state.films} />

        {/* для обработки ошибок (error), рендер по условию. */}
        {error && <h3 className="ErrorMessage">{error.message}</h3>}
      </div>
    );
  }
}

export default HomePage;
