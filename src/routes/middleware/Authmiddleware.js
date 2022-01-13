import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";

const Authmiddleware = ({
  component: Component,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected && !localStorage.getItem("login")) {
        return (
          <Redirect to={{pathname: "/login", state: {from: props.location}}} />
        );
      }

      return (
          <Component {...props} />
      );
    }}
  />
);

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
};

export default Authmiddleware;
