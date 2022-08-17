import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Card from "@mui/joy/Card";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCart from "../SideBar/emptyCart";
import { motion } from "framer-motion";
import GreenButton from "../Buttons/GreenButton";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

function OrderHistory() {
  const { totalItems } = useSelector((state) => state.order);
  if (totalItems.length !== 0) {
    return (
      <>
        {totalItems.length > 0 ? (
          <>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: "bold",
                mx: 5,
                fontFamily: "Arial",
                color: "#1ac073",
              }}
            >
              Order History
            </Typography>
            {totalItems.map((item, index) => (
              <Card
                variant="outlined"
                sx={{
                  maxWidth: {
                    xs: "53rem",
                    sm: "54rem",
                    md: "55rem",
                    lg: "56rem",
                    xl: "57rem",
                  },
                  borderColor: "#ccf0d5",
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    marginTop: "0.1rem",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h7"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      mx: 5,
                      fontFamily: "Arial",
                      color: "#808080",
                      float: "right",
                    }}
                  >
                    Date: {item.createdAt}
                  </Typography>
                  <Typography
                    variant="h7"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      mx: 5,
                      fontFamily: "Arial",
                      color: "#1ac073",
                      float: "right",
                    }}
                  >
                    {item.orderDelivered ? "Delivered" : "Pending"}
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 5.0,
                    flexWrap: "wrap",
                  }}
                >
                  <OrderCard cartItems={item.cartItems} />
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    marginTop: "0.5rem",
                    justifyContent: "right",
                  }}
                >
                    <Typography
                    variant="h7"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      mx: 5,
                      fontFamily: "Arial",
                      color: "#808080",
                      float: "right",
                    }}
                  >
                    Address: {item.address}
                  </Typography>
                  <Typography
                    variant="h7"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      mx: 5,
                      fontFamily: "Arial",
                      color: "black",
                      float: "right",
                    }}
                  >
                    ${Math.round(item.cartTotal * 100)/100}
                  </Typography>
                  
                </Grid>
              </Card>
            ))}
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3.0,
          }}
        >
          <EmptyCart text="Place an order now and your orders will show here! Happy Eating 🍔" />
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Link to="/menu">
              <GreenButton loading="true" text="Order Now!" />
            </Link>
          </Box>
        </Grid>
      </>
    );
  }
}

export default OrderHistory;
