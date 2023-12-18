import React, { Component } from 'react';
import { SearchHeader, Form, SearchButton, Input } from './Searchbar.styled';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };
  render() {
    return (
      <SearchHeader>
        <Form onSubmit={this.onSubmit}>
          <SearchButton type="submit">
            <SearchIcon fill="" />
          </SearchButton>

          <Input
            value={this.state.searchValue}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchHeader>
    );
  }
}