import React from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  largeImageURL,
  handleOpenLargeImage,
}) => {
  return (
    <Item key={id} onClick={() => handleOpenLargeImage(id)}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};
