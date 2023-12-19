import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { fetchImagesWithQuery } from 'api/api';

export class App extends Component {
  async componentDidMount() {}

  render() {
    return (
      <div>
        <Searchbar></Searchbar>
        <Loader />
        <ImageGallery searchResult={[]} />
      </div>
    );
  }
}
