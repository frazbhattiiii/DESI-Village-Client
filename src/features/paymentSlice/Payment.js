import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step:0,
    userDetails: {},
    paymentStatus: false,
    orderStatus: false,
}

const paymentSlice = createSlice ( {
                                    name : 'payment' ,
                                    initialState ,
                                    reducers : {
                                        changeStep : ( state , action ) => {
                                            state.step = action.payload
                                        },
                                        addUserDetails: ( state , action ) => {
                                            state.userDetails = action.payload
                                        },
                                        changePaymentStatus: ( state , action ) => {
                                            state.paymentStatus = action.payload
                                        },
                                        orderPlaced: ( state , action ) => {
                                            state.orderStatus = true
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { changeStep,addUserDetails,changePaymentStatus,orderPlaced} = paymentSlice.actions;
export default paymentSlice.reducer;