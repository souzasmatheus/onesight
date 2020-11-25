import React from 'react';
import { render } from '@testing-library/react';

import Form from './index';
import { MockedRouter, MockedTheme } from '~/../test/mocks/providers';

describe('<Form />', () => {
  it('should match snapshot test', () => {
    const tree = render(
      <MockedRouter>
        <MockedTheme>
          <Form>Test child</Form>
        </MockedTheme>
      </MockedRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const testString = 'Test child';
    const { getByText } = render(
      <MockedRouter>
        <MockedTheme>
          <Form>{testString}</Form>
        </MockedTheme>
      </MockedRouter>,
    );

    expect(getByText(testString)).toBeDefined();
  });
});
