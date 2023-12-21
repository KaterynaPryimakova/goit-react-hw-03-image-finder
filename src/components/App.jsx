import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { fetchImagesWithQuery } from 'api/api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: null,
    isLoading: false,
    error: null,
    page: 1,
    isModalOpen: false,
    modalData: null,
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });
      try {
        const gallery = await fetchImagesWithQuery(
          this.state.searchQuery,
          this.state.page
        );
        this.setState({ gallery });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery,
      page: 1,
      gallery: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = imageId => {
    const selectedImage = this.state.gallery.find(
      image => image.id === imageId
    );
    this.setState({
      isModalOpen: true,
      modalData: selectedImage,
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {this.state.isLoading && <Loader />}

        {!this.state.isLoading && (
          <ImageGallery
            searchResult={this.state.gallery}
            handleOpenModal={this.handleOpenModal}
          />
        )}
        {this.state.gallery && !this.state.isLoading && (
          <Button onClick={this.handleLoadMore} title="Load more" />
        )}
        {this.state.isModalOpen && (
          <Modal
            modalData={this.state.modalData}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
