import React from "react";
import { isAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import ProfileTabs from "../Components/Profile/ProfileTabs";
import { Grid, Box } from "@mui/material";

function Profile() {
  let loggedIn = true;
  if (isAuth() === undefined) {
    loggedIn = false;
  }
  const navigate = useNavigate();

  return (
    <>
      {loggedIn ? (
        <>
          <NavBar />
          <Grid
            item
            xs={6}
            display={{ xs: "flex", sm: "flex", lg: "flex", md: "flex" }}
            sx={{ marginTop: "2rem" }}
          >
            <Grid
              item
              xs={6}
              display={{ xs: "none", sm: "none", lg: "flex", md: "flex" }}
            >
              <Box
                component="img"
                src="./images/deliveryGuy.png"
                alt="Chef Image"
                sx={{
                  width: {
                    sm: "350px",
                    md: "500px",
                    lg: "550px",
                    xl: "550px",
                    xs: "300px",
                  },

                  height: {
                    sm: "196px",
                    md: "282px",
                    lg: "312px",
                    xl: "312px",
                    xs: "180px",
                  },
                  marginTop: {
                    xl: "6rem",
                    lg: "6rem",
                    md: "6rem",
                    sm: "6rem",
                    xs: "8rem",
                  },
                  marginLeft: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "2.5rem",
                    lg: "2rem",
                    xl: "2rem",
                  },
                }}
              />
            </Grid>
            <ProfileTabs />
          </Grid>
        </>
      ) : (
        setTimeout(() => {
          navigate("/login");
        }, 0)
      )}
      ;
    </>
  );
}

export default Profile;
