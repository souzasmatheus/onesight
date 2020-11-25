import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { StyledCard, StyledCardActions, StyledCardHeader } from './styled';

import { Container } from '~/components/templates';
import { StyledLink } from '~/components/atoms';

const SignIn = () => (
  <Container>
    <StyledCard>
      <StyledCardHeader
        title="Sign in"
        subheader={
          <p>
            Not registered yet? <StyledLink to="/sign-up">Sign up</StyledLink>!
          </p>
        }
      />
      <CardContent>
        <TextField margin="dense" type="email" label="E-mail" fullWidth />
        <TextField margin="dense" type="password" label="Password" fullWidth />
      </CardContent>
      <StyledCardActions>
        <Button variant="outlined">Sign in</Button>
      </StyledCardActions>
    </StyledCard>
  </Container>
);

export default SignIn;
