import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import EmptyCart from "./emptyCart";

const CartItem = ({ id, title, removeItemFromCart }) => {
    const cartLength = JSON.parse(localStorage.getItem('cart')).length;
    const allCartItems = localStorage.getItem('cart')
    const cartItems = JSON.parse(allCartItems);
    if(cartLength>0){
    return (
        <>
            {cartLength>0?
        cartItems.map(item => (
             <Grid container gap>
                 <Grid
                     item
                     xs={2}
                     sm={2}
                     md={2}
                     display='grid'
                     textAlign='center'
                     justifyContent='center'
                     alignContent='center'
                 >
                     <Box  alt={id}
                           component="img"
                           sx={{
                               height: 90,
                               width: 130,
                               marginLeft:{md: '4rem', xs: '4rem'},
                           }}
                           src={`${process.env.REACT_APP_API_URL}/images/${item.itemImage}`}/>
                     <Typography variant='h7'  fontWeight='500' sx={{marginLeft:{md:'3.5rem',xl:'3rem',sm:"2rem",xs:"2.5rem"}}}>{item.itemName}</Typography>
                     <Typography variant='subtitle2' fontSize='.55rem' sx={{
                         marginLeft: { md:'3rem',xl:'3rem',sm:"2rem",xs:"3rem" }
                     }}>{item.itemSize}</Typography>
                 </Grid>

                 <Grid
                     item
                     xs={4.5}
                     sm={4.5}
                     md={4}
                     display='grid'
                     textAlign='center'
                     justifyContent='center'
                     alignContent='center'
                 >
                     <Box>
                         <FormHelperText sx={{
                             fontSize:'.65rem',
                             ml:{md:8,xs:9}
                         }}>Item Price</FormHelperText>
                         <Typography variant='inherit' sx={{
                             ml:{md:8,xs:9},
                         }}>{`$${item.itemPrice}`}</Typography>
                     </Box>
                 </Grid>

                 <Grid
                     item
                     xs={2}
                     sm={2}
                     md={2}
                     display='grid'
                     textAlign='center'
                     justifyContent='center'
                     alignContent='center'
                 >
                     <FormHelperText sx={{
                         mx:2,
                         fontSize:'.65rem',
                     }}>Quantity </FormHelperText>

                     <Typography variant='inherit'>{item.itemQuantity}</Typography>
                 </Grid>

                 <Grid
                     item
                     xs={2}
                     sm={2}
                     md={2}
                     display='grid'
                     textAlign='center'
                     justifyContent='center'
                     alignContent='center'
                 >
                     <FormHelperText>Subtotal </FormHelperText>
                     <Typography variant='inherit'>
                         ${(item.itemPrice * item.itemQuantity).toFixed(2)}
                     </Typography>
                 </Grid>

             </Grid>)):null
            }
        </>
    );}
    else{
        return <><EmptyCart text="Your Cart is currently empty."/></>
    }
};

export default CartItem;