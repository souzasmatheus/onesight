import React from 'react';
import { render } from '@testing-library/react';

import { MockedTheme, MockedRouter } from '~/../test/mocks/providers';

import SignIn from './index';

describe('<SignIn />', () => {
  it('should match snapshot test', () => {
    const tree = render(
      <MockedRouter>
        <MockedTheme>
          <SignIn />
        </MockedTheme>
      </MockedRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});
