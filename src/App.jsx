import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SignIn, SignUp, Home } from '~/components/pages';

import { userSelector } from '~/feature/user/UserSlice';

const App = () => {
  const user = useSelector(userSelector);

  return (
    <Router>
      <Switch>
        <Route
          path="/sign-up"
          render={() => (user ? <Redirect to="/" /> : <SignUp />)}
        />
        <Route
          path="/sign-in"
          render={() => (user ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route
          path="/"
          render={({ location }) =>
            user ? (
              <Home />
            ) : (
              <Redirect
                to={{ pathname: '/sign-in', state: { from: location } }}
              />
            )
          }
        />
      </Switch>
    </Router>
  );
};

export default App;
