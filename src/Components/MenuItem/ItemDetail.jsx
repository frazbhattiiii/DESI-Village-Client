import React, { useState } from "react";
import { Divider, Grid, Typography, Box } from "@mui/material";
import ImagesList from "./ImagesList";
import ItemFooter from "./ItemFooter";
import FurtherDetails from "./FurtherDetails";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../Rating/StarRating";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ToastContainer from "../Toast/ToastContainer";
import { toast } from "react-toastify";
import { openCart, calculateTotal } from "../../features/cartSlice/cart";
import { addToCart } from "../../features/cartSlice/cartActions";

function ItemDetail(props) {
  const dispatch = useDispatch();
  const [sizing, setSize] = React.useState("");
  const [pricing, setPrice] = React.useState();
  const [sizeId, setSizeId] = React.useState();
  const [counter, setCounter] = useState(0);
  const { menuItems } = useSelector((state) => state.cart);

  const item = menuItems.items?.find((item) => item._id === props.itemId);
  if (item) {
    const {
      _id,
      vendor_id,
      imageURL,
      name,
      rating,
      price,
      category,
      delivery,
      info,
      description,
      reviews,
      speciality,
      sizes,
      hotel,
      availability,
    } = item;

    const handleChange = (event) => {
      sizes.find((item) => {
        if (item.size === event.target.value) {
          setSizeId(item._id);
          setPrice(item.price);
          setSize(event.target.value);
        }
      });
    };

    const increment = () => {
      setCounter(counter + 1);
    };
    const decrement = () => {
      counter < 1 ? setCounter(0) : setCounter(counter - 1);
    };
    const product = {
      itemId: _id,
      itemName: name,
      itemPrice: pricing,
      category,
      itemSize: sizing,
      itemQuantity: counter,
      vendorId: vendor_id._id,
      itemImage: imageURL[0],
    };
    const addInCart = () => {
      if (availability === false) {
        toast("Product is currently not available", {
          autoClose: 2000,
        });
        return;
      }
      if (sizing === "") {
        toast("Please Select the Size", {
          autoClose: 2000,
        });
        return;
      }
      if (counter <= 0) {
        toast("Please Select the Quantity", {
          autoClose: 2000,
        });
        return;
      }
      dispatch(addToCart(product));
      dispatch(calculateTotal());
      dispatch(openCart());
    };
    return (
      <>
        <>

          <Grid container spacing={3}>
            <Grid
              item
              sx={{
                marginLeft: "2rem",
                marginTop: "4rem",
                marginBottom: "2rem",
              }}
            >
              <img
                src={`${process.env.REACT_APP_API_URL}/images/${imageURL[0]}`}
                alt="pizza"
                style={{
                  width:'20rem',
                }}

              />
            </Grid>
            <ToastContainer />
            <Grid
              item
              sx={{
                marginLeft: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "3rem",
                  xl: "3rem",
                },
                marginTop: {
                  xs: ".5rem",
                  sm: ".5rem",
                  md: "5rem",
                  lg: "5rem",
                  xl: "5rem",
                },
              }}
            >
              <Typography variant="h5" fontFamily="poppins">
                {name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#8c8c8c",
                }}
              >
                <StarRating rating={rating}></StarRating>
                {rating === 0 ? "" : `${rating} Rating`}
              </Typography>
              <Divider />
              <Typography variant="h6" color="green" fontFamily="poppins">
                ${pricing}
              </Typography>
              <FurtherDetails left={"Available"} right={availability} />
              <Divider />
              <FurtherDetails left={"Category"} right={vendor_id.category} />
              <Divider />
              <FurtherDetails left={"Hotel"} right={vendor_id.name} />
              <Divider />
              <FurtherDetails left={"Location"} right={vendor_id.location} />
              <Divider />
              <FurtherDetails left={"Delivery"} right={delivery} />
              <Divider />
              <FormControl sx={{ mt: 4, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Size</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={sizing}
                  label="Size"
                  onChange={handleChange}
                  sx={{
                    width: "12rem",
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {sizes?.map((size) => (
                    <MenuItem key={size.id} value={size.size}>
                      {size.size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "2rem",
                    lg: "7rem",
                    xl: "7rem",
                  },
                }}
              >
                <Box>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems="center"
                  >
                    <FormControl
                      sx={{
                        m: 1,
                        width: "11ch",
                      }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">Qty</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        type="number"
                        inputProps={{
                          "aria-label": "weight",
                          type: "number",
                          value: counter,
                          max: 10,
                          min: 0,
                          disabled: true,
                        }}
                      />
                      <FormHelperText
                        id="outlined-weight-helper-text"
                        sx={{
                          marginLeft: "1.2rem",
                        }}
                      >
                        Available
                      </FormHelperText>
                    </FormControl>
                    <Stack direction={{ xs: "row-reverse", sm: "column" }}>
                      <IconButton aria-label="addButton" onClick={increment}>
                        <AddIcon />
                      </IconButton>
                      <IconButton aria-label="removeButtom" onClick={decrement}>
                        <RemoveIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  onClick={addInCart}
                  sx={{
                    backgroundColor: "#1ac073",
                    width: {
                      xs: "10rem",
                      sm: "11rem",
                      md: "12rem",
                      lg: "14rem",
                      xl: "14rem",
                    },
                    height: "3rem",
                    marginTop: "2rem",
                  }}
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
          <ImagesList images={imageURL} />
          <ItemFooter
            description={description}
            reviews={reviews}
            speciality={speciality}
          />
        </>
      </>
    );
  }
  return <div>Loading...</div>;
}

export default ItemDetail;
