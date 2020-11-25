import React from 'react';
import { render } from '@testing-library/react';

import NavBar from './index';

import { MockedTheme } from '../../../../test/mocks/providers';

describe('<NavBar />', () => {
  it('should match the snapshot test', () => {
    const tree = render(
      <MockedTheme>
        <NavBar />
      </MockedTheme>,
    );

    expect(tree).toMatchSnapshot();
  });
});
