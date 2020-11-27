import React from 'react';
import { render } from '@testing-library/react';

import Search from './index';

import { MockedStore } from '~/../test/mocks/providers';

describe('<Search />', () => {
  it('should match snapshot tests', () => {
    const tree = render(
      <MockedStore>
        <Search />
      </MockedStore>,
    );

    expect(tree).toMatchSnapshot();
  });
});
