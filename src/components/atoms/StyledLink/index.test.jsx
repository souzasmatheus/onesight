import React from 'react';
import { render } from '@testing-library/react';

import { MockedRouter } from '~/../test/mocks/providers';

import StyledLink from './index';

describe('<StyledLink />', () => {
  it('should match snapshot test', () => {
    const tree = render(
      <MockedRouter>
        <StyledLink to="/test">Test</StyledLink>
      </MockedRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render child correctly', () => {
    const testString = 'Test';
    const { getByText } = render(
      <MockedRouter>
        <StyledLink to="/test">
          <button>{testString}</button>
        </StyledLink>
      </MockedRouter>,
    );

    expect(getByText(testString)).toBeDefined();
  });
});
