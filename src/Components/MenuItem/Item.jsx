import React from "react";
import ItemDetail from "./ItemDetail";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import GoBackBtn from "../Buttons/GoBackBtn";
import { Box } from "@mui/material";
function Item(props) {
  const { id } = useParams();
  return (
    <>
      <NavBar />
        <Box sx={{
            overflow:'hidden'
        }}>
      <Home />
      <Box mt={2}>
        <GoBackBtn />
      </Box>
      <ItemDetail itemId={id} />
        </Box>
    </>
  );
}

export default Item;
