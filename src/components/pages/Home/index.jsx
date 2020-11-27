import React from 'react';
import { useSelector } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from '~/components/templates';
import { Search } from '~/components/molecules';
import { RecipesTable } from '~/components/organism';

import { recipesSelector } from '~/feature/recipes/RecipesSlice';

import { Wrapper, ProgressContainer, StyledAlert } from './styled';

const Home = () => {
  const { recipes, loading, errors } = useSelector(recipesSelector);
  return (
    <Container>
      <Wrapper>
        <Search />
        {loading && (
          <ProgressContainer>
            <CircularProgress />
          </ProgressContainer>
        )}
        {recipes?.length > 0 && !loading && <RecipesTable />}
        {errors && !loading && (
          <StyledAlert variant="outlined" severity="error">
            An error occurred. Please, try again!
          </StyledAlert>
        )}
        {!recipes && !loading && (
          <StyledAlert variant="outlined" severity="warning">
            Recipe not found. Please, try another one!
          </StyledAlert>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
