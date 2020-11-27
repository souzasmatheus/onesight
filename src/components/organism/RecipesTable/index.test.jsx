import React from 'react';
import { render } from '@testing-library/react';

import RecipesTable from './index';

import { MockedStore } from '~/../test/mocks/providers';

describe('<RecipesTable />', () => {
  let state;

  beforeEach(
    () =>
      (state = {
        recipes: [
          {
            strMeal: 'Arrabiata',
            strCategory: 'Italian',
          },
        ],
      }),
  );

  it('should match snapshot', () => {
    const tree = render(
      <MockedStore {...{ state }}>
        <RecipesTable />
      </MockedStore>,
    );

    expect(tree).toMatchSnapshot();
  });
});
