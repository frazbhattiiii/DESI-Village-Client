import { Divider , Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import IncrementButton from "./IncrementButton";
import EmptyCart from "../SideBar/emptyCart";
import { useDispatch , useSelector } from "react-redux";
import { calculateTotal , setCartItems } from "../../features/cartSlice/cart";

const CartItem = () => {
    const dispatch = useDispatch();
    const {cartItems,cartLength,change}= useSelector(state=>state.cart);
    if(!localStorage.getItem("cart")){
        return <EmptyCart/>
    }
    const handleRemoveItem = (itemId,itemSize) =>{
    const newCart = cartItems.filter(item=>item.itemSize!==itemSize);
    dispatch(setCartItems(newCart));
    dispatch(calculateTotal());

    };

    if(cartLength>0) {
        return (
            cartItems.map((item)=>
            <>
                <Grid container gap>
                    <Grid
                        item
                        xs={ 12 }
                        md={ 2 }
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                        sx={{
                            mt:2,
                            mb:2,
                        }}
                    >
                        <img src={`${process.env.REACT_APP_API_URL}/images/${item.itemImage}`} alt='Product' height='150' width='200'/>
                    </Grid>

                    <Grid
                        item
                        xs={ 12 }
                        md={ 2 }
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Typography variant='h6' sx={ {
                            mx : 3
                        } }>{item.itemName}</Typography>
                        <Typography variant='description' fontSize='.75rem' sx={ {
                            mx : 2
                        } }>{item.itemSize}</Typography>
                    </Grid>

                    <Grid
                        item
                        xs={ 12 }
                        sm={ 3 }
                        md={ 2 }
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Box>
                            <FormHelperText>Item Price</FormHelperText>
                            <Typography variant='inherit'>{ item.itemPrice }</Typography>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={ 12 }
                        sm={ 3 }
                        md={ 2 }
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <FormHelperText sx={ {
                            mx : 3
                        } }>Quantity </FormHelperText>
                        <IncrementButton Quantity={item.itemQuantity} itemId={item.itemId} itemSize={item.itemSize}/>
                        {/*<Typography variant='inherit'>{ item.itemQuantity }</Typography>*/}
                    </Grid>

                    <Grid
                        item
                        xs={ 12 }
                        sm={ 3 }
                        md={ 2 }
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <FormHelperText>Subtotal </FormHelperText>
                        <Typography variant='inherit'>
                            ${ (item.itemPrice * item.itemQuantity).toFixed(2) }
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={ 12 }
                        sm={ 2 }
                        md={ 1 }
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Tooltip title='Remove Item' placement='top'>
                            <IconButton onClick={ ()=>handleRemoveItem(item.itemId,item.itemSize) }>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Divider/>
            </>
                )
        );
    }
    else{
        return <EmptyCart/>
    }
};

export default CartItem;