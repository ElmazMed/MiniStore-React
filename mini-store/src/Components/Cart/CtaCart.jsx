import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "../../App.css";

export default function CtaCart({ total }) {
  return (
    <>
      <Grid container mb={10} mt={5} alignItems={"center"}>
        <Grid xs={10} item display={"flex"} justifyContent={"flex-end"} gap={2}>
          <Typography className="sub" variant="h5" mr={11} color={"secondary"}>
            $ {total}
          </Typography>
        </Grid>
        <Grid xs={2} item>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button variant={"contained"} className="cta-cart-btn">
              Proceed to checkout
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
