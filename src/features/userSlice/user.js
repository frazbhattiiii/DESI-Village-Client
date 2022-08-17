import { createSlice } from '@reduxjs/toolkit'
import { loginUser , registerUser , activateUser , googleLogin, updateProfile } from './userActions'
import { removeCookie , removeLocalStorage } from "../../utils/auth";

const initialState = {
    loading : false ,
    userInfo : null ,
    loggedIn : false ,
    googleLoggedIn : false ,
    userToken : null ,
    loggedOut:false,
    error : null ,
    active : false ,
    register : false ,
}

const userSlice = createSlice ( {
                                    name : 'user' ,
                                    initialState ,
                                    reducers : {
                                        logout : ( state ) => {
                                            removeLocalStorage ( 'user' )
                                            removeLocalStorage ( 'token' )
                                            removeCookie('token')
                                            state.loading = false
                                            state.userInfo = null
                                            state.loggedIn = false
                                            state.register = false
                                            state.loggedOut = true
                                            state.googleLoggedIn = false
                                            state.userToken = null
                                            state.error = null
                                        } ,
                                    } ,
                                    extraReducers : {
                                        [ loginUser.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null
                                        } ,
                                        [ loginUser.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.loggedIn = true
                                            state.userInfo = payload
                                            state.loggedOut = false
                                            state.userToken = payload

                                        } ,
                                        [ loginUser.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload
                                        } ,
                                        //google login
                                        [ googleLogin.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null
                                        } ,
                                        [ googleLogin.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.googleLoggedIn = true
                                            state.userInfo = payload
                                            state.loggedOut = false
                                            state.userToken = payload.token
                                        } ,
                                        [ googleLogin.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload
                                        } ,
                                        //register user
                                        [ registerUser.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null
                                        } ,
                                        [ registerUser.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.register = true // registration successful
                                        } ,
                                        [ registerUser.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload
                                        } ,
                                        //Activate a user
                                        [ activateUser.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null
                                        } ,
                                        [ activateUser.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.active = true

                                        } ,
                                        [ activateUser.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload
                                        } ,

                                        //updating user profile
                                        [ updateProfile.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null
                                        } ,
                                        [ updateProfile.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.active = true

                                        } ,
                                        [ updateProfile.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload
                                        } ,

                                    } ,
                                } )
export const { logout } = userSlice.actions;
export default userSlice.reducer