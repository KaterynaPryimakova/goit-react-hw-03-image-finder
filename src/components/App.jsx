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
    console.log('didMount');
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.setState({ isLoading: true });
      try {
        const gallery = await fetchImagesWithQuery(this.state.searchQuery);
        this.setState({ gallery });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({
      searchQuery,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {this.state.isLoading && <Loader />}

        {!this.state.isLoading && (
          <ImageGallery searchResult={this.state.gallery} />
        )}
      </div>
    );
  }
}
