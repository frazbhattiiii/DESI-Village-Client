import React from 'react'
import ForgotPassword from '../Components/Auth/ForgotPassword';
import { isAuth } from "../utils/auth";
import Dashboard from "./Dashboard";
const Forgot = () => {
  return (
    <>
      {!isAuth()?
        <ForgotPassword />:<Dashboard />}
    </>
  )
}

export default Forgot