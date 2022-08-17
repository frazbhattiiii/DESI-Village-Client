import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendEmail = createAsyncThunk (
    'email/send' ,
    async ( { name,email,message } , { rejectWithValue } ) => {
        try {
            const response = await axios.post ( `${ process.env.REACT_APP_API_URL }/email` , {
                name ,
                email ,
                message ,
            } )
            return response.data;
        }
            catch ( error ) {
// return custom error message from API if any
            if ( error.response && error.response.data.message ) {
                return rejectWithValue ( error.response.data.message )
            } else {
                return rejectWithValue ( error.message )
            }
        }

    });