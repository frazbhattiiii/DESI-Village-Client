import React from "react";
import LogoutDialogue from "../Components/Auth/LogoutDialogue";
import { isAuth } from "../utils/auth";
import Dashboard from "./Dashboard";
function Logout(props) {
  return <>
    {isAuth() ? 
        <LogoutDialogue /> : <Dashboard />}</>;
}

export default Logout;
