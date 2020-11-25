import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '~/assets/images/logo.png';

import { StyledImage, StyledAppBar } from './styled';

const NavBar = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <StyledImage src={Logo} alt="logo" />
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
