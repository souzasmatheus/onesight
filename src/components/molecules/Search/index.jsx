import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRecipes } from '~/feature/recipes/RecipesSlice';

import { StyledPaper, StyledInput, SearchButton } from './styled';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = useCallback(() => {
    dispatch(getRecipes(query));
  }, [query]);

  return (
    <StyledPaper component="form">
      <StyledInput placeholder="Search a recipe" onChange={handleTextChange} />
      <SearchButton disabled={!query} onClick={handleSearch} />
    </StyledPaper>
  );
};

export default Search;
