import React from 'react';

import { StyledPaper, StyledInput, SearchButton } from './styled';

const Search = () => {
  return (
    <StyledPaper component="form">
      <StyledInput placeholder="Search a recipe" />
      <SearchButton />
    </StyledPaper>
  );
};

export default Search;
