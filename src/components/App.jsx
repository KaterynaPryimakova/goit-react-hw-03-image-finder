import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { fetchImagesWithQuery } from 'api/api';

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    const gallery = await fetchImagesWithQuery(this.state.searchQuery);
    this.setState({ gallery });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <Loader />
        <ImageGallery searchResult={[]} />
      </div>
    );
  }
}
