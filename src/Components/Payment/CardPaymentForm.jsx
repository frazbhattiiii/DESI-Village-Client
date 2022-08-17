import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  changePaymentStatus,
  changeStep,
} from "../../features/paymentSlice/Payment";
import { toast } from "react-toastify";
import ToastContainer from "../Toast/ToastContainer";
import { addOrder } from "../../features/cartSlice/cartActions";

function CardPaymentForm(props) {
  const [open, setOpen] = React.useState(false);
  const { cartTotal, cartItems } = useSelector((state) => state.cart);
  const { userDetails } = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleToken = (token) => {
    const user = localStorage.getItem("user");
    const userId = localStorage.getItem("user") ? JSON.parse(user)._id : "";
    const data = userDetails;
    dispatch(changePaymentStatus(true));
    toast("Payment Successful", {
      autoClose: 3000,
    });
    setTimeout(() => {
      dispatch(changeStep(2));
      dispatch(addOrder({ cartItems, cartTotal, data, userId }));
      alert("Your order is being placed...kindly wait");
    }, 3000);
  };

  return (
    <>
      <ToastContainer />
      <StripeCheckout
        token={handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
        Name="Pay with Credit Card"
        billingAddress
        shippingAddress
        amount={cartTotal * 100}
        description={`Your total price is $${cartTotal}`}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            backgroundColor: "#1ac073",
          }}
        >
          Pay Now
        </Button>
      </StripeCheckout>
    </>
  );
}

export default CardPaymentForm;
