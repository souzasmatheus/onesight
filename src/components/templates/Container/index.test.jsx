import React from 'react';
import { render } from '@testing-library/react';

import Container from './index';

import { MockedTheme } from '~/../test/mocks/providers';

describe('<Container />', () => {
  it('should match snapshot test', () => {
    const tree = render(
      <MockedTheme>
        <Container>
          <p>Test child node</p>
        </Container>
      </MockedTheme>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render its child correctly', () => {
    const testString = 'Test child node';

    const { getByText } = render(
      <MockedTheme>
        <Container>
          <h1>{testString}</h1>
        </Container>
      </MockedTheme>,
    );

    expect(getByText(testString)).toBeDefined();
  });
});
