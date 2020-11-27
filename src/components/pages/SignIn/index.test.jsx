import React from 'react';
import { render } from '@testing-library/react';

import {
  MockedTheme,
  MockedRouter,
  MockedStore,
} from '~/../test/mocks/providers';

import SignIn from './index';

describe('<SignIn />', () => {
  it('should match snapshot test', () => {
    const tree = render(
      <MockedRouter>
        <MockedStore>
          <MockedTheme>
            <SignIn />
          </MockedTheme>
        </MockedStore>
      </MockedRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});
