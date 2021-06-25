import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import s from './FilmsList.module.css';

const FilmsList = ({ films, location }) => {
  return (
    <>
      <ul className={s.FilmsList}>
        {films.map(({ id, title }) => (
          <li key={id} className={s.FilmsList_link}>
            <Link
              to={{
                pathname: `/movies/${id}`,

                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

FilmsList.propType = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }),
  ),
};

export default withRouter(FilmsList);
