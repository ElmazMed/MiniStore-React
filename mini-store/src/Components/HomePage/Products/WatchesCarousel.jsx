import React, { useContext, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductsContext } from "../Products/ProductsContext";

import { Box, Button, Slide, Snackbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Fade from "@mui/material/Fade";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function WatchesCarousel() {
  const { products, setProductCounter, productCounter } =
    useContext(ProductsContext);
  const [addToCart, setAddToCart] = useState({
    visibility: "hidden",
    mb: "12%",
    opacity: "0",
  });

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseOver = () => {
    setAddToCart({
      ...addToCart,
      visibility: "visible",
      mb: "20%",
      opacity: "1",
    });
  };
  const handleMouseOut = () => {
    setAddToCart({
      ...addToCart,
      visibility: "hidden",
      mb: "12%",
      opacity: "0",
    });
  };
  const handleAddToCart = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
    setProductCounter(productCounter + 1);
  };
  return (
    <>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Added To Cart Successfully!"
        style={{ letterSpacing: "2px" }}
        key={state.Transition.name}
        autoHideDuration={2000}
      />

      <div className="slider-container">
        <Slider {...settings}>
          {products[0].watches.map((p) => {
            return (
              <Box key={p.id}>
                <Grid
                  container
                  alignItems={"center"}
                  flexDirection={"column"}
                  gap={2}
                  width={"90%"}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <Grid position={"relative"}>
                    <img src={p.image} width={"100%"} alt="" />

                    <Button
                      variant="contained"
                      style={{
                        position: "absolute",
                        bottom: addToCart.mb,
                        marginInline: "3.3%",
                        letterSpacing: "2px",
                        borderRadius: "0",
                        visibility: addToCart.visibility,
                        transition: "all .5s ease-in-out",
                        opacity: addToCart.opacity,
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "65%",
                      }}
                      onClick={handleAddToCart(SlideTransition)}
                      endIcon={<ShoppingCartIcon />}
                    >
                      Add to cart
                    </Button>
                  </Grid>

                  <Grid container xs={12} alignItems={"center"}>
                    <Grid xs={6}>
                      <Typography
                        variant="subtitle1"
                        textTransform={"uppercase"}
                      >
                        {p.name}
                      </Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography
                        variant="subtitle1"
                        textAlign={"end"}
                        color={"secondary"}
                      >
                        ${p.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
