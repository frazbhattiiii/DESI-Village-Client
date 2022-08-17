import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { addToCart , getAllItems , getCart ,addOrder} from "../cartSlice/cartActions";

const initialState = {
    open:false,
    added:false,
    error:false,
    change:false,
    filter: '',
    search: '',
    totalItems: 0,
    categoriesCount: {
    },
    currentPagination: 1,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    menuItems:{},
    filteredItems: [],
    orderStatus:false,
    cartLength:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')).length:0,
    cartTotal: 0,
}

const cartSlice = createSlice ( {
                                    name : 'cartOpen' ,
                                    initialState ,
                                    reducers : {
                                        openCart : ( state , action ) => {
                                            state.open = true
                                        } ,
                                        closeCart : ( state , action ) => {
                                            state.open = false
                                        },
                                        handleIncrement : ( state , action ) => {

                                            state.cartItems.foreach( item => {
                                                if ( item.itemId === action.payload.itemId && item.itemSize === action.payload.itemSize ) {
                                                    item.itemQuantity += 1
                                                    localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                                }

                                            } )

                                        } ,
                                        handleDecrement : ( state , action ) => {
                                            state.cartItems.foreach( item => {
                                                if ( item.itemId === action.payload.itemId && item.itemSize === action.payload.itemSize ) {
                                                    if(item.itemQuantity<=1){
                                                        item.itemQuantity = 1
                                                        localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                                    }
                                                    else{
                                                        item.itemQuantity -= 1
                                                        localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                                    }

                                                }
                                            } )
                                        },
                                        calculateTotal : ( state , action ) => {
                                            state.cartTotal=0
                                            const cartItems= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
                                            cartItems.forEach( item => {
                                                state.cartTotal += item.itemPrice*item.itemQuantity
                                            } )
                                            if(cartItems.length===0){
                                                state.cartTotal=0
                                                state.cartLength=0
                                            }
                                        } ,
                                        setFilteredItems: (state, action) => {
                                            const { filter, search } = action.payload
                                            state.filter = filter
                                            state.search = search

                                            if (Object.keys(current(state.menuItems)).length !== 0)
                                                state.filteredItems = current(state.menuItems).items.filter(
                                                    item => item.category.toLowerCase().includes(state.filter.toLowerCase()) 
                                                    && item.name.toLowerCase().includes(state.search.toLowerCase())
                                                )
                                            state.totalItems = state.filteredItems.length
                                            state.currentPagination = 1
                                        },
                                        setCategories: (state, action) => {
                                            let categoriesCount = {}
                                            if (Object.keys(current(state.menuItems)).length != 0) 
                                                state.menuItems.items.map(
                                                    item => {
                                                        if(categoriesCount[item.category])
                                                            categoriesCount[item.category]++
                                                        else categoriesCount[item.category]=1
                                                    }
                                                )
                                            state.categoriesCount = categoriesCount        
                                        },
                                        setTags: (state, action) => {
                                            const { offers } = action.payload
                                            let prevItems = current(state.menuItems).items
                                            if (offers === 'discount') {
                                                state.filteredItems = prevItems.filter(
                                                    item => parseInt(item.discount) !== 0
                                                    )
                                            } else if (offers === 'delivery') {
                                                state.filteredItems = prevItems.filter(
                                                    item => item.freeDelivery === true
                                                    )
                                            } else if (offers === 'popular') {
                                                state.filteredItems = prevItems.filter(
                                                    item => item.rating >= 3.0
                                                    )
                                            } else if (offers === 'all') {
                                                state.filteredItems = prevItems
                                            }
                                            state.totalItems = state.filteredItems.length
                                            state.currentPagination = 1
                                        },
                                        setPriceFilter : (state, action) => {
                                            const { priceRange } = action.payload
                                            const [min, max] = priceRange
                                            let prevItems = current(state.menuItems).items
                                            state.filteredItems = prevItems.filter(
                                                item => item.price >= min && item.price <= max
                                            )
                                            state.totalItems = state.filteredItems.length
                                        },
                                        resetFilters: (state, action) => {
                                            state.filter = ''
                                            state.search = ''
                                            state.filteredItems = []
                                        },
                                        setCurrentPagination: (state, action) => {
                                            const { pagination } = action.payload
                                            state.currentPagination = pagination
                                        },
                                        setCartItems: ( state , action ) => {
                                            state.cartItems = action.payload
                                            state.cartLength = state.cartLength-1
                                            if(state.cartLength===0){
                                                state.cartLength=0
                                                state.cartTotal=0
                                            }
                                            localStorage.setItem('cart', JSON.stringify(state.cartItems))
                                        } ,
                                    } ,
                                    extraReducers : {
                                        [ getAllItems.pending ] : ( state ) => {
                                            state.loading = true
                                            state.error = null

                                        } ,
                                        [ getAllItems.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.change = true
                                            state.menuItems = payload
                                            state.totalItems = payload.items.length

                                        } ,
                                        [ getAllItems.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.error = payload

                                        } ,
                                        [ getCart.pending ] : ( state ) => {
                                            state.loadinng = true
                                        } ,
                                        [ getCart.fulfilled ] : ( state , { payload } ) => {

                                            state.cartItems = payload
                                            state.loading = false

                                        } ,
                                        [ getCart.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                        } ,
                                        [ addToCart.pending ] : ( state ) => {
                                            state.loading = true
                                            state.added=false
                                            state.change = false
                                            state.error = null
                                        } ,
                                        [ addToCart.fulfilled ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.added=true
                                            state.change=true
                                            state.cartLength=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')).length:0
                                            state.active = true
                                        } ,
                                        [ addToCart.rejected ] : ( state , { payload } ) => {
                                            state.loading = false
                                            state.added=false
                                            state.error = payload
                                            state.change=false
                                        } ,

                                        [ addOrder.fulfilled ] : ( state , { payload } ) => {
                                            state.orderStatus = true
                                            state.error = false
                                        } ,
                                        [addOrder.pending] : ( state ) => {
                                           state.orderStatus = false
                                            state.error = false
                                        } ,
                                        [addOrder.rejected] : ( state , { payload } ) => {
                                            state.error = true
                                        } ,

                                    } ,
                                } )
export const { openCart,closeCart,calculateTotal,handleIncrement,handleDecrement,setCartItems, setFilteredItems, setTags, setCurrentPagination, resetFilters, setCategories, setPriceFilter } = cartSlice.actions;
export default cartSlice.reducer;