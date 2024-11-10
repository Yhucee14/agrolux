import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth(); // Get user state from AuthContext

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} /> // Render component if user is logged in
        ) : (
          <Redirect to="/login" /> // Redirect to login page if not logged in
        )
      }
    />
  );
};

export default PrivateRoute;
