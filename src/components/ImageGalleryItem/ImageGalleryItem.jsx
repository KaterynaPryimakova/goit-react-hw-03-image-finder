import React from 'react';
import { Image, Item, ImageButton } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  handleOpenModal,
}) => {
  return (
    <Item key={id}>
      <ImageButton onClick={() => handleOpenModal(id)}>
        <Image src={webformatURL} alt={tags} />
      </ImageButton>
    </Item>
  );
};
