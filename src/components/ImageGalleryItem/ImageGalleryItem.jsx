import React from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  handleOpenModal,
}) => {
  return (
    <Item key={id} onClick={() => handleOpenModal(id)}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};
