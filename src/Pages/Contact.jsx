import React from "react";
import { motion } from "framer-motion";
import { Box, Divider, Grid, Typography } from "@mui/material";
import ContactComponet from "../Components/Contact/CotactComponent";
import NavBar from "../Components/NavBar/NavBar";

function Contact(props) {
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
  return (
    <>
      <NavBar />
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 60 }}
        animate={animate}
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="darkgreen" fontFamily="poppins">
          Wanna Tell Something ?
        </Typography>
        <Divider />
        <Typography variant="h5" color="darkgreen" fontFamily="poppins">
          Feel Free to Contact Us
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "12rem 2rem 0 2rem",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={7} sx={{
              display:{
                  xl:"block",
                  lg:'block',
                  xs:"none",
                  md:"block",
                  sm:"block",
              },
          }}>
            <Box
              component={motion.img}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              src="./images/contactUs.jpg"
              sx={{
                width: '100%',
                marginTop: {
                  xl: "-8rem",
                  lg: "-4rem",
                  md: "-4rem",
                  sm: "0",
                  xs: "0",
                },
              }}
            />
          </Grid>
          <Grid sx={{
              marginLeft:"2rem",
              marginTop:{
                    xl:"0",
                    lg:"0",
                    md:"0",
                    sm:"1rem",
                    xs:"-3rem",
                },

          }}>
            <ContactComponet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
