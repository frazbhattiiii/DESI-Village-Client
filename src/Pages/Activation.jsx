import React from "react";
import ActivationPage from "../Components/Auth/ActivationPage";
import { isAuth } from "../utils/auth";
import Dashboard from "./Dashboard";
const Activation = () => {
  return <>
      {!isAuth() ? <ActivationPage /> : <Dashboard />}
    </>;
};

export default Activation;
