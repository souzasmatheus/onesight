import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  isValidEmail,
  isValidPassword,
  passwordsAreEqual,
} from '~/lib/validation';

import { auth } from '~/services/firebase';

import { setUser } from '~/feature/user/UserSlice';

import { StyledLink } from '~/components/atoms';
import { Form } from '~/components/molecules';

import { StyledCardActions, StyledCardHeader } from './styled';

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [isValid, setValid] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      isValidEmail(email) &&
      isValidPassword(password) &&
      passwordsAreEqual(password, confirmationPassword)
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email, password, confirmationPassword]);

  const handleSignUp = async () => {
    setError('');
    setLoading(true);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      dispatch(setUser(user));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <Form>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
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
        <TextField
          margin="dense"
          type="email"
          label="E-mail"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          type="password"
          label="Password"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          margin="dense"
          type="password"
          label="Confirm password"
          fullWidth
          onChange={(e) => setConfirmationPassword(e.target.value)}
        />
      </CardContent>
      <StyledCardActions>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button disabled={!isValid} variant="outlined" onClick={handleSignUp}>
            Sign up
          </Button>
        )}
      </StyledCardActions>
    </Form>
  );
};

export default SignUp;
