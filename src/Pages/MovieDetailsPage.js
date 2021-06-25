import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import routes from '../routes';

import moviesApi from '../api/movie-api';
// import defaultImg from '../images/default.jpg';

// Lazy
const Cast = lazy(() => import('../Components/Cast/Cast'));

const Reviews = lazy(() => import('../Components/Reviews/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    genres: [],
    error: null,
  };

  // запрос для отрисовки страницы с информацией о фильме

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    // запрос полной информации о фильме для страницы кинофильма по id.
    moviesApi
      .fetchMovieDetails(movieId)
      .then(data => {
        this.setState({
          movie: data,
          genres: [...data.genres],
        });
      })
      .catch(error => this.setState({ error }));
  }

  getYear = data => String(data).slice(0, 4);
  getPercent = vote => vote * 10;

  //  Переход "Go back"
  handleGoBackButton = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
    } = this.state.movie;

    const { genres, error } = this.state;

    return (
      <>
        <section>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleButtonGoBack}
          >
            Go back
          </button>

          <div className="CardWrapper">
            <div className="Card-img">
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                    : null
                }
                alt={original_title}
                width="342"
              />
            </div>

            <div className="card">
              <h2 className="card-title">
                {original_title} ({this.getYear(release_date)})
              </h2>

              <p className="card-text">
                User Score: {this.getPercent(vote_average)}%{' '}
              </p>

              <h3 className="card-subtitle mb-2 text-muted">Overview </h3>

              <p className="card-text">{overview}</p>

              <h3 className="card-subtitle mb-2 text-muted">Genres</h3>

              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3>Additional information</h3>

            <ul className="list-group">
              <li className="list-group-item list-group-item-info">
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: { ...this.props.location.state },
                  }}
                  className="nav-link"
                  activeClassName="active"
                >
                  Cast
                </NavLink>
              </li>
              <li className="list-group-item list-group-item-info">
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: { ...this.props.location.state },
                  }}
                  className="nav-link"
                  activeClassName="active"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Suspense fallback={<h2>Loading...</h2>}>
              <Switch>
                {/* CAST */}
                <Route
                  exact
                  path={`${this.props.match.path}/cast`}
                  component={Cast}
                />

                {/* REVIEWS */}
                <Route
                  exact
                  path={`${this.props.match.path}/reviews`}
                  component={Reviews}
                />
              </Switch>
            </Suspense>
          </div>

          {error && <h3 className="ErrorMessage">{error.message}</h3>}
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
