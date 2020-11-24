import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { SignIn, SignUp, Home } from './components/pages';

const App = () => {
  const user = null;

  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
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
