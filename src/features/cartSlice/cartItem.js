import { createSlice } from '@reduxjs/toolkit'
// import { cartAction } from './cartActions';

const initialState = {
    quantity:0,
    sizeId:0,
    itemPrice:0,
    image:'',
    size:'',
    hotel:"",
    hotelId:"",
    availability:false,
}

const cartItemSlice = createSlice ( {
                                    name : 'cartItem' ,
                                    initialState ,
                                    reducers : {
                                        handleQuantity : ( state , action ) => {
                                            state.quantity = action.payload
                                        } ,
                                        handleSize : ( state , action ) => {
                                            state.size = action.payload.size
                                            state.sizeId = action.payload.sizeId
                                        } ,
                                        handlePrice: ( state , action ) => {
                                            state.itemPrice = action.payload
                                        } ,
                                        handleDetails : ( state , action ) => {
                                            state.sizeId=action.payload.sizeId;
                                            state.name = action.payload.name
                                            state.hotel = action.payload.hotel
                                            state.image = action.payload.image
                                            state.hotelId = action.payload.hotelId
                                            state.availability = action.payload.availability
                                        } ,
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { handleQuantity,handleSize,handleDetails,handlePrice } = cartItemSlice.actions;
export default cartItemSlice.reducer;