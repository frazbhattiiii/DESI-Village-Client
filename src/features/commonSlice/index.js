import { createSlice } from '@reduxjs/toolkit'
import { sendEmail } from "./commonActions";
const initialState = {
    success: null,
    error: null,
}

const commonSlice = createSlice ( {
                                    name : 'common' ,
                                    initialState ,
                                    reducers : {
                                        sendEmailSuccess : ( state , action ) => {
                                            state.success = false;
                                        } ,
                                        sendEmailError : ( state , action ) => {
                                            state.error = action.payload;
                                        } ,
                                    } ,
                                    extraReducers : {

                                        [ sendEmail.pending ] : ( state ) => {
                                            state.success = null
                                            state.error = null
                                        } ,
                                        [ sendEmail.fulfilled ] : ( state , { payload } ) => {
                                            state.success = payload.message
                                        } ,
                                        [ sendEmail.rejected ] : ( state , { payload } ) => {
                                            state.error = payload
                                        } ,

                                    } ,
                                } )
export const { sendEmailSuccess  } = commonSlice.actions;
export default commonSlice.reducer;