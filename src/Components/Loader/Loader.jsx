import React from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { openCart } from "../../features/cartSlice/cart";

function Loader(props) {
  const dispatch = useDispatch();
  dispatch(openCart());
  setTimeout(() => {}, 3000);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </>
  );
}

export default Loader;
