import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

import { RecipeInfo } from '~/components/molecules';

import { recipesSelector } from '~/feature/recipes/RecipesSlice';

import { StyledTableContainer } from './styled';

const RecipesTable = () => {
  const { recipes } = useSelector(recipesSelector);

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Recipe</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Watch now!</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes?.map((recipe) => (
            <RecipeInfo
              src={recipe?.strMealThumb}
              name={recipe.strMeal}
              category={recipe.strCategory}
              link={recipe?.strYoutube}
              description={recipe?.strInstructions}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default RecipesTable;
