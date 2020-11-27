import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import { isValidEmail, isValidPassword } from '~/lib/validation';

import { auth } from '~/services/firebase';

import { setUser } from '~/feature/user/UserSlice';

import { StyledCardActions, StyledCardHeader } from './styled';

import { StyledLink } from '~/components/atoms';
import { Form } from '~/components/molecules';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isValidEmail(email) && isValidPassword(password)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email, password]);

  const handleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      dispatch(setUser(user.email));
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
        title="Sign in"
        subheader={
          <p>
            Not registered yet? <StyledLink to="/sign-up">Sign up</StyledLink>!
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
      </CardContent>
      <StyledCardActions>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button disabled={!isValid} variant="outlined" onClick={handleSignIn}>
            Sign in
          </Button>
        )}
      </StyledCardActions>
    </Form>
  );
};

export default SignIn;
