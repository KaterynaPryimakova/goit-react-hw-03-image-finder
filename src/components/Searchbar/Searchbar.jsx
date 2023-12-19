import React from 'react';
import { SearchHeader, Form, SearchButton, Input } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export const Searchbar = onSubmit => {
  return (
    <SearchHeader>
      <Form onSubmit={onSubmit}>
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchHeader>
  );
};
