import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export const StyledPaper = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  max-width: 550px;
  margin: 20px auto 0;
`;

export const StyledInput = styled(InputBase)`
  flex: 1;
  margin-left: 10px;
`;

export const SearchButton = styled(IconButton).attrs({
  children: <SearchIcon />,
})``;
