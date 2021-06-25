import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../api/movie-api';

//styles
import s from './Reviews.module.css';
class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    // запрос об информация об обзорах для страницы MovieDetailsPage
    moviesApi
      .fetchReviews(movieId)
      .then(({ results }) => {
        if (results.length === 0) {
          throw new Error('No reviews for this movie');
        }

        this.setState({
          reviews: [...results],
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews, error } = this.state;

    return (
      <>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4> Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>

        {/* для обработки ошибок (error), рендер по условию. error.message = 'We don`t have any reviews for this movie' */}
        {error && <h3 className={s.ErrorMessage}>{error.message}</h3>}
      </>
    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
