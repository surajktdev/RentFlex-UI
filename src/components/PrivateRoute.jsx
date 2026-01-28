import React from "react";
import Base from "./Base";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth/index";

const PrivateRoute = () => {
  // check if user is logged in
  if (isLoggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default PrivateRoute;
