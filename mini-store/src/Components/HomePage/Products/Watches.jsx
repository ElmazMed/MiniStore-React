import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import WatchesCarousel from "./WatchesCarousel";

export default function Watches() {
  return (
    <>
      <Container>
        <Grid container mb={5} mt={20}>
          <Grid xs={6}>
            <Typography variant="h5" textTransform={"uppercase"}>
              Smart Watches
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Link style={{ textDecoration: "none", textAlign: "end" }}>
              <li style={{ fontSize: ".9rem" }}>Go to shop</li>
            </Link>
          </Grid>
        </Grid>
        <WatchesCarousel />
      </Container>
    </>
  );
}
