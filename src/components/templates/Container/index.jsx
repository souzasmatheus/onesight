import React from 'react';
import PropTypes from 'prop-types';

import { NavBar } from '~/components/molecules';

import { Wrapper } from './styled';

const Container = ({ children }) => (
  <Wrapper>
    <NavBar />
    {children}
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
