import React from "react";
import Box from "@mui/joy/Box";
import { Typography, Grid } from "@mui/material";
import Card from "@mui/joy/Card";

function OrderCard(props) {
  let cartItems = props.cartItems;
  return (
    <>
      {cartItems.map((item, index) => (
        <Card
          variant="outlined"
          sx={{
            maxWidth: "20rem",
            height: "8rem",
            borderColor: "#ccf0d5",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Grid sx={{ display: "flex" }}>
            <Grid>
              <Box
                component="img"
                src={`${process.env.REACT_APP_API_URL}/images/${item.itemImage}`}
                alt="Chef Image"
                sx={{
                  width: "5rem",

                  height: "5rem",
                  display: "flex",
                }}
              />
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography
                variant="h7"
                fontFamily="poppins"
                fontSize="md"
                sx={{ marginLeft: "0.5rem" }}
              >
                {item.itemName}
              </Typography>

              <Typography
                variant="p"
                sx={{
                  marginLeft: "0.5rem",
                  color: "#808080",
                  fontSize: "0.8rem",
                  top: "0px",
                }}
              >
                {item.itemSize}
              </Typography>

              <Typography
                variant="h7"
                fontFamily="poppins"
                fontSize="md"
                sx={{ marginLeft: "0.5rem" }}
              >
                ${item.itemPrice}
                <Typography
                  variant="p"
                  sx={{
                    marginLeft: "0.5rem",
                    color: "#808080",
                    fontSize: "0.8rem",
                    top: "0px",
                    float: "right",
                  }}
                >
                  Quantity: {item.itemQuantity}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
}

export default OrderCard;
