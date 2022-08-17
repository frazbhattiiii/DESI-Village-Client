import React from "react";
import { Grid, ImageListItem, ImageList } from "@mui/material";

function ImagesList(props) {
  const images = props.images;
  // remove first element from array
  const imaging = images.slice(1);
  return (
    <Grid
      sx={{
        mt: {
          xs: "2rem",
          sm: "2rem",
          md: "1rem",
          lg: "1rem",
          xl: "1rem",
        },
        ml: {
            xs: ".125rem",
            sm: "1.25rem",
            md: "1.5rem",
            lg: "1.5rem",
            xl: "1.5rem",
        },
      }}
    >
      <ImageList
        sx={{ width: {xl:420,lg:420,md:420,sm:400,xs:350}, height: 230, borderRadius: "2rem" }}
        cols={3}
        rowHeight={164}
      >
        {imaging.map((image, index) => (
          <ImageListItem key={index}>
            <img
              src={`${process.env.REACT_APP_API_URL}/images/${image}`}
              alt=""
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}

export default ImagesList;
