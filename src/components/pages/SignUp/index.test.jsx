import React from 'react';
import { render } from '@testing-library/react';

import { MockedTheme, MockedRouter } from '~/../test/mocks/providers';

import SignUp from './index';

describe('<SignUp />', () => {
  it('should match snapshot test', () => {
    const tree = render(
      <MockedRouter>
        <MockedTheme>
          <SignUp />
        </MockedTheme>
      </MockedRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});
