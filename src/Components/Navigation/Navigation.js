import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

//styles
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.navbar}>
      <NavLink
        exact
        to={routes.home}
        className={s.nav_link}
        activeClassName={s.active}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={s.nav_link}
        activeClassName={s.active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
