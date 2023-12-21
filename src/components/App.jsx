import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { fetchImagesWithQuery } from 'api/api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Report } from 'notiflix/build/notiflix-report-aio';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    gallery: null,
    error: null,
    isLoading: false,
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
        if (gallery.length === 0) {
          Report.info(
            'Ooops!',
            'No results found for your search query.',
            'Okay'
          );
        } else {
          this.setState({ gallery });
        }
      } catch (error) {
        this.setState({ error });
        Report.failure('Error', `${error}`, 'Okay');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery,
      page: 1,
      gallery: null,
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
    const { isLoading, gallery, isModalOpen, modalData } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        {isLoading && <Loader />}

        {!isLoading && (
          <ImageGallery
            searchResult={gallery}
            handleOpenModal={this.handleOpenModal}
          />
        )}

        {gallery && gallery.length >= 12 && !isLoading && (
          <Button onClick={this.handleLoadMore} title="Load more" />
        )}

        {isModalOpen && (
          <Modal
            modalData={modalData}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}
