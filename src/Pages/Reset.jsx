import React from "react";
import ResetPassword from "../Components/Auth/ResetPassword";
import { isAuth } from "../utils/auth";
import Dashboard from "./Dashboard";
const Reset = () => {
  return <>{!isAuth() ? <ResetPassword /> : <Dashboard />}</>;
};

export default Reset;
