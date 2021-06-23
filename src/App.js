import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Cast from './Components/Cast/Cast';
import HomePage from './Components/HomePage/HomePage';
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './Components/MoviesPage/MoviesPage';
import Reviews from './Components/Reviews/Reviews';

const App = () => (
  <>
    {/* <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route exact path="/books" component={BooksView} />
      <Route path="/books/:bookId" component={BookDetailsView} />
      <Route component={NotFoundView} />
    </Switch> */}
  </>
);

export default App;