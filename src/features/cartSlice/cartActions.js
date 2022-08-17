import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllItems = createAsyncThunk (
    'items/getAll' ,

    async () => {
        try {
    // make request to backend
            const response = await axios
                .get(    `${ process.env.REACT_APP_API_URL }/food/get-all-items`);
            return response.data;
        } catch ( error ) {
    // return custom error message from API if any
    return error.response.data.message;
        }

    }
)

export const addToCart = createAsyncThunk (
'cart/add' ,
async ( { itemImage, itemId, itemName, itemPrice, itemQuantity, category, itemSize, vendorId } , { rejectWithValue } ) => {
    try {
            const cart = JSON.parse(localStorage.getItem('cart'));
            if(cart) {

                //check if the item exist in the cart then increase the quantity
                const itemExist = cart.find ( item => item.itemId === itemId );
                const sizeExist = cart.find ( item => item.itemSize === itemSize );
                if ( itemExist && sizeExist) {
                    sizeExist.itemQuantity += itemQuantity;
                    localStorage.setItem ( 'cart' , JSON.stringify ( cart ) );
                    return;
                }
                else {
                    cart.push ( {
                                    itemImage , itemId , itemName , itemPrice , itemQuantity , category , itemSize ,
                                    vendorId
                                } );
                    localStorage.setItem ( 'cart' , JSON.stringify ( cart ) );
                }
            }
            else{
                localStorage.setItem('cart', JSON.stringify([{itemImage, itemId, itemName, itemPrice, itemQuantity, category, itemSize, vendorId}]));
            }
    } catch ( error ) {
// return custom error message from API if any
        if ( error.response && error.response.data.message ) {
            return rejectWithValue ( error.response.data.message )
        } else {
            return rejectWithValue ( error.message )
        }
    }

});

export const getCart = createAsyncThunk (
    'cart/getItems' ,

    async () => {
        try {
            return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        } catch ( error ) {
// return custom error message from API if any
            return error.response.data.message;
        }

    }
)
export const addOrder = createAsyncThunk (
    'cart/add/order' ,
    async ( {cartItems,cartTotal,data,userId} , { rejectWithValue } ) => {
        try {
            const response = await axios
                .post(    `${ process.env.REACT_APP_API_URL }/cart/order` , {cartItems,cartTotal,data,userId});
            return response.data;
        } catch ( error ) {
// return custom error message from API if any
            if ( error.response && error.response.data.message ) {
                return rejectWithValue ( error.response.data.message )
            } else {
                return rejectWithValue ( error.message )
            }
        }

    });

