import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GoBackBtn from '../Buttons/GoBackBtn';
import Payment from "../Payment/Payment";
import { Stack , TextField } from "@mui/material";
import { useSelector } from "react-redux";


const Cart = () => {
    const navigate = useNavigate();
    const [showPayment, setShowPayment] = useState (false );
    const {cartTotal,cartLength}=  useSelector(state => state.cart);
    const redirectToPayment = () => {
        cartLength > 0 ? setShowPayment(true) : navigate('/');
    }
    return (
        <>
            {!showPayment?
             <>

            <h1 style={{
             marginLeft:'2rem',
                color:"#1ac073",
            }}>Your Items</h1>
            <hr  style={{
                marginLeft:'2rem'
            }}/>

            <br />
                 <GoBackBtn />

                    <Container className='animate__animated animate__fadeIn'>
                            <Fragment key=''>
                                <CartItem  />
                                <Divider variant='middle' sx={{ my: 3 }} />
                            </Fragment>
                    </Container>

                <Box
                    className='animate__animated animate__fadeInUp'
                    align='right'>
                    <Typography
                        variant='h6'
                        align='right'
                        sx={{
                            fontWeight: 'bold',
                            mx:7
                        }}>
                        SubTotal: {cartTotal.toFixed(2)}

                    </Typography>
                 <Typography align='right' sx={{
                     mx:7,
                 }} >
                     Shipping Fee: {cartLength>0?8.00:0}
                 </Typography>
                    <Typography align='right' sx={{
                        mx:7,
                        fontWeight:600,
                        fontSize:'1rem'
                    }} >
                        Total: ${cartLength>0?(cartTotal+8).toFixed(2):0}
                    </Typography>
                </Box>
                    <Box display='flex' gap justifyContent={'center'} my>
                        <Button
                            variant='contained'
                            color='error'
                            // component={Link}
                            onClick={redirectToPayment}
                            sx={{
                                backgroundColor:"#1ac073",
                            }}
                            startIcon={<PointOfSaleIcon />}
                        >
                            {cartLength>0?'Proceed to Payment':"Explore"}
                        </Button>
                    </Box>
                    <Stack direction="row" sx={{
                        mx:3,
                        mb:'4rem',
                    }}>
                        <TextField label="Code" sx={{
                            width:'20%'
                        }}/>
                        <Button
                            variant='contained'
                            color='error'
                            sx={{
                                backgroundColor:"#1ac073",
                            }}
                        >
                            Get Discount
                        </Button>
                    </Stack>

                </>:<Payment />}
        </>
    );
};

export default Cart;