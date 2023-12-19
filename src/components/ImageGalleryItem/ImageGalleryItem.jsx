import React from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, tags, webformatURL, largeImageURL }) => {
  return (
    <Item key={id}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};
