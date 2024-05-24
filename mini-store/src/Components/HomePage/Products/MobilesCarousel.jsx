import React, { useContext, useState } from "react";

import { Box, Button, Slide, Snackbar, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductsContext } from "../Products/ProductsContext";

export default function MobilesCarousel() {
  const { products, handleClose, state, addToCartHandler, settings } =
    useContext(ProductsContext);

  const phonesProducts = products.filter((p) => p.category === "phones");

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  const [hoveredProduct, setHoveredProduct] = useState(null);

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
          {phonesProducts.map((p) => {
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
                  <Grid item={true} position={"relative"}>
                    <img src={p.image} width={"100%"} alt="" />

                    <Button
                      variant="contained"
                      style={{
                        position: "absolute",
                        bottom: hoveredProduct === p.id ? "20%" : "12%",
                        marginInline: "3.3%",
                        letterSpacing: "2px",
                        borderRadius: "0",
                        visibility:
                          hoveredProduct === p.id ? "visible" : "hidden",
                        transition: "all .5s ease-in-out",
                        opacity: hoveredProduct === p.id ? "1" : "0",
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
                    <Grid item={true} xs={6}>
                      <Typography
                        variant="subtitle1"
                        textTransform={"uppercase"}
                      >
                        {p.name}
                      </Typography>
                    </Grid>
                    <Grid item={true} xs={6}>
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
