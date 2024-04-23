import React, { useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductsContext } from "../Products/ProductsContext";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function MobilesCarousel() {
  const products = useContext(ProductsContext);

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
  const handleClick = () => {
    alert("hello");
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((p) => {
          return (
            <Box key={p.id}>
              <Grid
                container
                alignItems={"center"}
                flexDirection={"column"}
                gap={2}
                width={"90%"}
                onMouseOver={handleClick}
              >
                <Grid>
                  <img src={p.image} width={"100%"} />
                </Grid>

                <Grid container xs={12} alignItems={"center"}>
                  <Grid xs={6}>
                    <Typography variant="subtitle1" textTransform={"uppercase"}>
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
  );
}
