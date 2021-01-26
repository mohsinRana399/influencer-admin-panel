import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
/**
 * @author
 * @function PrivateRoute
 **/

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authStatus = useSelector((state) => state.auth);
  const [userAuthentication, setUserAuthentication] = useState("false");
  useEffect(() => {
    setUserAuthentication(authStatus.authenticated);
  }, [authStatus]);
  return (
    <Route
      {...rest}
      component={(props) => {
        if (userAuthentication) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/`} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
