import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../Components/Auth/LoginForm";
import SocialAuth from "../Components/Auth/SocialAuth";
import { isAuth } from "../utils/auth";
import Logo from "../Components/Auth/Logo";
import Dashboard from "./Dashboard";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar/NavBar";

const RootStyle = styled.div`
  background: rgb(249, 250, 251);
  display: grid;
  overflow:hidden;
  margin-top: 1rem;
  margin-bottom:1rem;
  place-items: center;
  @media (max-width: 375px) {
    width: 22rem;
    margin-left: -1.5rem;
    margin-top: 1rem;
  }
`;

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: '2rem',
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ setAuth }) => {
  return (
    <>
        <NavBar />
      {!isAuth() ? (
        <RootStyle>
          <Container>
            <ContentStyle sx={{
              padding:{
                xs:'0 1rem',
                sm:'2rem',
                md:'2rem',
                lg:'2rem',
                xl:'2rem',
              }
            }}>
              <HeadingStyle component={motion.div} {...fadeInUp}>
                <Logo />
                <Typography sx={{ color: "text.secondary", mb: 5 }}>
                  Enter your details below.
                </Typography>
              </HeadingStyle>

              <Box component={motion.div} {...fadeInUp}>
                <SocialAuth />
              </Box>

              <Divider sx={{ my: 2 }} component={motion.div} {...fadeInUp}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  OR
                </Typography>
              </Divider>

              <LoginForm />

              <Typography
                component={motion.p}
                {...fadeInUp}
                variant="body2"
                align="center"
                sx={{ color: "text.secondary", mt: 2 }}
              >
                By registering, I agree to{" "}
                <Link underline="always" color="text.primary" href="#">
                  Terms of Service
                </Link>{" "}
                &{" "}
                <Link underline="always" color="text.primary" href="#">
                  Privacy Policy
                </Link>
                .
              </Typography>

              <Typography
                component={motion.p}
                {...fadeInUp}
                variant="body2"
                align="center"
                sx={{ mt: 2 }}
              >
                Don't have an account?{" "}
                <Link variant="subtitle2" component={RouterLink} to="/signup">
                  Signup Now
                </Link>
              </Typography>
            </ContentStyle>
          </Container>
        </RootStyle>

      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Login;
