import React from 'react'
import PropTypes from 'prop-types'
import {
  Redirect,
  Route,
} from 'react-router-dom';
import isAuthenticated from '../selectors/authentication/isAuthenticated';
import { connect } from 'react-redux'
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...props
}) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    render={(p) => {
      return (isAuthenticated ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...p} />
      ) : (
        <Redirect
          to={{
            pathname: '/sign-in',
            state: { from: p.location },
          }}
        />
      ))
    }}
  />
)

const stateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(stateToProps, null)(PrivateRoute);
