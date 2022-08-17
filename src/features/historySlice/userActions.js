import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const orderHistory = createAsyncThunk (
  'user/history' ,

  async ({userId}) => {
      try {
  // make request to backend
          const response = await axios
              .post(    `${ process.env.REACT_APP_API_URL }/user/history`, {userId});
          return response.data;
      } catch ( error ) {
  // return custom error message from API if any
  return error.response.data.message;
      }

  }
)


//getting the history
