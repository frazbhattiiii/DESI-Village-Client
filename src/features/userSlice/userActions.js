import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie, setLocalStorage } from "../../utils/auth";

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      // make request to backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          name,
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const activateUser = createAsyncThunk(
  // action type string
  "user/register/activate",
  // callback function
  async ({ token }, { rejectWithValue }) => {
    try {
      // make request to backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/activation`,
        {
          token,
        }
      );
      return response.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUser = createAsyncThunk(
  // action type string
  "user/login",
  // callback function
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // make request to backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      setCookie("token", response.data.token);
      setLocalStorage("user", response.data.user);
      return response.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const googleLogin = createAsyncThunk(
  // action type string
  "user/google/login",
  // callback function
  async ({ idToken }, { rejectWithValue }) => {
    try {
      // make request to backend
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/auth/login/google`,
        data: { idToken },
      });
      setCookie("token", response.data.token);
      setLocalStorage("user", response.data.user);
      return response.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//updating the profile of user
export const updateProfile = createAsyncThunk(
  // action type string
  "user/updateProfile",
  // callback function
  async (
    { userId, name, contact, address, password, newPassword },
    { rejectWithValue }
  ) => {
    try {
      // configure header's Content-Type as JSON
      // make request to backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/profile`,
        {
          userId: userId,
          newName: name,
          newContact: contact,
          newAddress: address,
          password: password,
          newPassword: newPassword,
        }
      );
      return response.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
