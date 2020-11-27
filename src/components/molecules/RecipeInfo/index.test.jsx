import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { MockedStore } from '~/../test/mocks/providers';

import RecipeInfo from './index';

describe('<RecipeInfo />', () => {
  const props = {
    name: 'Arrabiata',
    category: 'Italian',
    description: 'Una ricetta squisita',
  };

  it('should match snapshot test', () => {
    const tree = render(
      <MockedStore>
        <RecipeInfo {...props} />
      </MockedStore>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render information correctly', () => {
    const { getByText } = render(
      <MockedStore>
        <RecipeInfo {...props} />
      </MockedStore>,
    );

    expect(getByText(props.name)).toBeDefined();
    expect(getByText(props.category)).toBeDefined();
  });

  it('should open Dialog on click', () => {
    const { getByTestId, getByText } = render(
      <MockedStore>
        <RecipeInfo {...props} />
      </MockedStore>,
    );

    fireEvent.click(getByTestId('recipe-table-cell'));

    expect(getByText(props.description)).toBeDefined();
  });
});
