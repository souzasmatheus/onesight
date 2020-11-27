import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import VideoIcon from '@material-ui/icons/OndemandVideo';

import { recipesSelector } from '~/feature/recipes/RecipesSlice';

import { StyledTableContainer, StyledAvatar } from './styled';

const RecipesTable = () => {
  const { recipes } = useSelector(recipesSelector);

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Click to expand</TableCell>
            <TableCell align="right">Recipe</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Watch now!</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes?.map((recipe) => (
            <TableRow>
              <TableCell align="left">
                <StyledAvatar src={`${recipe?.strMealThumb}`} />
              </TableCell>
              <TableCell align="right">{recipe?.strMeal}</TableCell>
              <TableCell align="right">{recipe?.strCategory}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => {
                    window.open(recipe?.strYoutube);
                  }}
                >
                  <VideoIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default RecipesTable;
