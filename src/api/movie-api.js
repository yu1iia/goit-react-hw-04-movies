import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '281dade4a7bc0d1faee0b1d0cf191172';

// HomePage http-запрос за списком самых популярных фильмов на сегодня
const fetchTrendingMovies = () => {
  return axios
    .get(`${baseURL}/trending/movie/day?api_key=${apiKey}&page=1`)
    .then(({ data }) => data)
    .catch(error => error);
};

// MovieDetailsPage http-запрос полной информации о фильме

const fetchMovieDetails = movieId => {
  // выносим в отдельную переменную movieId - значение this.props.match.params.movieId
  //   const movieId = this.props.match.params.movieId;

  return axios
    .get(`${baseURL}/movie/${movieId}?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

// fetchCast запрос информации о актёрском составе

const fetchCast = movieId => {
  return axios
    .get(`${baseURL}/movie/{movie_id}/credits?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

// fetchReviews запрос обзоров для страницы кинофильма

const fetchReviews = movieId => {
  return axios
    .get(`${baseURL}/movie/{movie_id}/reviews?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

// Search запрос для поиска кинофильма по ключевому слову на странице MoviesPage
const fetchSearchMovies = ({ searchQuery = '' }) => {
  return axios
    .get(`${baseURL}/search/movie?query=${searchQuery}&api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchSearchMovies,
  fetchCast,
  fetchReviews,
};
