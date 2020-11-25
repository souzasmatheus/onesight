import React from 'react';
import PropTypes from 'prop-types';

import { StyledCard, Wrapper } from './styled';

const Form = ({ children }) => (
  <Wrapper>
    <StyledCard>{children}</StyledCard>
  </Wrapper>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
