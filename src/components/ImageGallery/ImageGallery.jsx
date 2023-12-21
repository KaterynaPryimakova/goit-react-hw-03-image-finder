import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ searchResult, handleOpenLargeImage }) => {
  return (
    <Gallery>
      {Array.isArray(searchResult) &&
        searchResult.map(({ id, tags, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              handleOpenLargeImage={handleOpenLargeImage}
            />
          );
        })}
    </Gallery>
  );
};
