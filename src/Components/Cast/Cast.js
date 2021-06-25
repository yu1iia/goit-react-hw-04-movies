import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../api/movie-api'; //import файла, который прописывает логику настроек Api для http-запросов

import s from './Cast.module.css';

import defaultImg from '../../images/default.jpg';

class Cast extends Component {
  state = {
    casts: [],
    error: null,
  };

  // ЖИЗНЕННЫЕ ЦИКЛЫ
  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    //  Cast. Http-запрос об актёрском составе
    moviesApi
      .fetchCast(movieId)
      .then(results => {
        if (results.cast.length === 0) {
          throw new Error(
            'We don`t have any information about cast for this movie',
          );
        }

        this.setState({
          casts: [...results.cast],
        });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { casts, error } = this.state;

    return (
      <>
        <ul className="CastGallery">
          {casts.map(({ id, name, character, profile_path }) => (
            <li key={id} className="CastGalleryItem">
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92/${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="92"
                className="CastGalleryItem-image"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>

        {error && <h3 className="ErrorMessage">{error.message}</h3>}
      </>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
