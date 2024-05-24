import React, { useContext, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductsContext } from "../Products/ProductsContext";

import { Box, Button, Slide, Snackbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function WatchesCarousel() {
  const { products, state, handleClose, addToCartHandler, settings } =
    useContext(ProductsContext);

  const watchesProducts = products.filter((p) => p.category === "watches");

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  const [hoverdProduct, setHoveredProduct] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredProduct(id);
  };
  const handleMouseOut = () => {
    setHoveredProduct(null);
  };
  const handleAddToCart = (Transition, p) => () => {
    addToCartHandler(Transition, p);
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
        autoHideDuration={1000}
      />

      <div className="slider-container">
        <Slider {...settings}>
          {watchesProducts.map((p) => {
            return (
              <Box key={p.id}>
                <Grid
                  container
                  alignItems={"center"}
                  flexDirection={"column"}
                  gap={2}
                  width={"90%"}
                  onMouseOver={() => handleMouseOver(p.id)}
                  onMouseOut={handleMouseOut}
                >
                  <Grid position={"relative"}>
                    <img src={p.image} width={"100%"} alt="" />

                    <Button
                      variant="contained"
                      style={{
                        position: "absolute",
                        bottom: hoverdProduct === p.id ? "20%" : "12%",
                        marginInline: "3.3%",
                        letterSpacing: "2px",
                        borderRadius: "0",
                        visibility:
                          hoverdProduct === p.id ? "visible" : "hidden",
                        transition: "all .5s ease-in-out",
                        opacity: hoverdProduct === p.id ? "1" : "0",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "65%",
                      }}
                      onClick={handleAddToCart(SlideTransition, p)}
                      endIcon={<ShoppingCartIcon />}
                    >
                      Add to cart
                    </Button>
                  </Grid>

                  <Grid container xs={12} item alignItems={"center"}>
                    <Grid xs={6} item>
                      <Typography
                        variant="subtitle1"
                        textTransform={"uppercase"}
                      >
                        {p.name}
                      </Typography>
                    </Grid>
                    <Grid xs={6} item>
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
