import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import "../../App.css";
import { useTheme } from "@emotion/react";

import { useSelector } from "react-redux";

export default function CtaCart({ total }) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const products = useSelector((state) => state.addCart.products);
  return (
    <>
      <Grid
        container
        mb={10}
        mt={5}
        alignItems={"center"}
        flexDirection={isSm ? "column" : "row"}
      >
        <Grid
          md={10}
          sx={12}
          item
          display={"flex"}
          justifyContent={"flex-end"}
          gap={2}
        >
          <Typography
            className="sub"
            variant="h5"
            mr={isSm ? 0 : 11}
            textAlign={"center"}
            color={"secondary"}
          >
            <span style={{ color: "black", fontWeight: "600" }}>Total: </span>${" "}
            {total}
          </Typography>
        </Grid>
        <Grid xs={12} md={2} mt={isSm ? 3 : 0} item>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              disabled={products.length === 0 ? true : false}
              variant={"contained"}
              className="cta-cart-btn"
            >
              <Link
                to={products.length === 0 ? "/cart" : "/checkout"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Proceed to checkout
              </Link>
            </Button>
            <Button variant={"contained"} className="cta-cart-btn">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/electronics"
              >
                Continue shopping
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
