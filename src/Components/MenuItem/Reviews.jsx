import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StarRating from "../Rating/StarRating";

function Reviews(props) {
  const review = props.review;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          mt: "2rem",
        }}
      >
        <IconButton sx={{ p: 0 }}>
          <Avatar alt={review.name} src="/static/images/avatar/2.jpg" />
        </IconButton>
        <StarRating rating={review.rating} />
      </Box>
      <Typography>{review.comment}</Typography>
    </>
  );
}

export default Reviews;
