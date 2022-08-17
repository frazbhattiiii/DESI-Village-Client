import React   from "react";
import NavBar  from "../Components/NavBar/NavBar";
import Home    from "../Components/Home/Home";
import Menu    from "../Components/Menu/Menu";
import Footer  from "../Components/Footer/Footer";
import { Box } from "@mui/material";

function Dashboard(props) {
  return (
    <>
        <NavBar />
        <Box sx={{
            overflow:'hidden'
        }}>
        <Home />
        <Menu />
      < Footer />
        </Box>
    </>
  );
}

export default Dashboard;
