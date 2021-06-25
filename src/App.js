import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';

// Components
import AppBar from './Components/AppBar/AppBar';

const HomePage = lazy(() => import('./Pages/HomePage'));

const MoviesPage = lazy(() => import('./Pages/MoviesPage'));

const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <AppBar />

        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            {/* Home Page */}
            <Route exact path={routes.home} component={HomePage} />

            {/* Movies Page ,  MovieDetails Page  */}
            <Route exact path={routes.movies} component={MoviesPage} />

            <Route path={routes.movieDetails} component={MovieDetailsPage} />

            {/* страница по умолчанию, куда перенаправить в случае, если такого адреса не имеется */}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
