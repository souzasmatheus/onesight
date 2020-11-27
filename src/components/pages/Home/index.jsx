import React from 'react';

import { Container } from '~/components/templates';
import { Search } from '~/components/molecules';
import { RecipesTable } from '~/components/organism';

import { Wrapper } from './styled';

const Home = () => (
  <Container>
    <Wrapper>
      <Search />
      <RecipesTable />
    </Wrapper>
  </Container>
);

export default Home;
