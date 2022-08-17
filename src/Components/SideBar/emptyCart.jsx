import React from "react";
import emptyCart from "./emptyCart.png";
import { Typography, Grid } from "@mui/material";
function EmptyCart(props) {
  return (
    <>
    <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img src={emptyCart} alt="EmptyCart.png" width="350" />
      <Typography
        variant="h6"
        color="darkred"
        fontFamily="poppins"
        align="center"
      >
        {props.text}
      </Typography>
      </Grid>
    </>
  );
}

export default EmptyCart;
