import React from 'react';
import { render } from '@testing-library/react';

import {
  MockedTheme,
  MockedRouter,
  MockedStore,
} from '~/../test/mocks/providers';

import SignUp from './index';

describe('<SignUp />', () => {
  it('should match snapshot test', () => {
    const tree = render(
      <MockedRouter>
        <MockedStore>
          <MockedTheme>
            <SignUp />
          </MockedTheme>
        </MockedStore>
      </MockedRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});
