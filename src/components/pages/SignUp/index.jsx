import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { StyledCard, StyledCardActions, StyledCardHeader } from './styled';

import { Container } from '~/components/templates';
import { StyledLink } from '~/components/atoms';

const SignUp = () => (
  <Container>
    <StyledCard>
      <StyledCardHeader
        title="Sign Up"
        subheader={
          <p>
            Already registered?{' '}
            <StyledLink to="/sign-in">Sign in now</StyledLink>!
          </p>
        }
      />
      <CardContent>
        <TextField margin="dense" type="email" label="E-mail" fullWidth />
        <TextField margin="dense" type="password" label="Password" fullWidth />
        <TextField
          margin="dense"
          type="password"
          label="Confirm password"
          fullWidth
        />
      </CardContent>
      <StyledCardActions>
        <Button variant="outlined">Sign up</Button>
      </StyledCardActions>
    </StyledCard>
  </Container>
);

export default SignUp;
