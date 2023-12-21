import React from 'react';
import { SearchHeader, Form, SearchButton, Input } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.search.value;
    onSubmit(searchQuery);
  };
  return (
    <SearchHeader>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </Form>
    </SearchHeader>
  );
};
