import React, { Component } from 'react';
import Axios from 'axios';

class MovieDetailsPage extends Component {
    state = {
    base_url: null,
    descr: null,
    title: null,
    overview: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `http://localhost:4040/books/${movieId}?_expand=author`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const { base_url, title, overview, descr } = this.state;
    return (
      <>
        <h1>Страница одной книги {this.props.match.params.movieId}</h1>
        <img src={base_url} alt="" />
        <h2>{title}</h2>
        {overview && <p>Автор: {overview.name}</p>}
        <p>{descr}</p>
      </>
    );
  }
}

export default MovieDetailsPage;