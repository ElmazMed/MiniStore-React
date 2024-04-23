import React from "react";
import "../../../App.css";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MobilesCarousel from "./MobilesCarousel";

export default function Mobiles() {
  return (
    <>
      <Container>
        <Grid container mb={5}>
          <Grid xs={6}>
            <Typography variant="h5" textTransform={"uppercase"}>
              Mobile Products
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Link style={{ textDecoration: "none", textAlign: "end" }}>
              <li style={{ fontSize: ".9rem" }}>Go to shop</li>
            </Link>
          </Grid>
        </Grid>
        <MobilesCarousel />
      </Container>
    </>
  );
}
