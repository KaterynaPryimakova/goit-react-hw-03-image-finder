import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
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
