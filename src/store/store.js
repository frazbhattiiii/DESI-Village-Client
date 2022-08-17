import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice/user'
import cartReducer from '../features/cartSlice/cart';
import cartItemReducer from '../features/cartSlice/cartItem'
import paymentReducer from '../features/paymentSlice/Payment'
import commonReducer from '../features/commonSlice';
import orderReducer from '../features/historySlice/history';
const store = configureStore({
    reducer: {
        user: userReducer,
        cart:cartReducer,
        cartItem:cartItemReducer,
        payment:paymentReducer,
        common:commonReducer,
        order: orderReducer,
    }
})
export default store