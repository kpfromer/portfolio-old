import React from 'react';
import { useGlobalState } from '..';
import { Redirect, Route, RouteProps } from 'react-router';

export interface AuthRouteProps {}

const AuthRoute: React.FC<RouteProps> = props => {
  const [state] = useGlobalState();
  if (state.token === '') {
    // TODO: check if invalid token
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default AuthRoute;
