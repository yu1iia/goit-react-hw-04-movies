import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <div className={s.Search}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type={s.submit} className={s.SearchForm_button}>
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleChange}
          />

          <button type="submit" className={s.Search_button}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
