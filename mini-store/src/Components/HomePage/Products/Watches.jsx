import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import WatchesCarousel from "./WatchesCarousel";
import { useTheme } from "@emotion/react";

export default function Watches() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Container>
        <Grid container mb={5} mt={20}>
          <Grid xs={6} item>
            <Typography
              variant={isSm ? "h6" : "h5"}
              fontSize={isSm ? "1rem" : "1.4rem"}
              textTransform={"uppercase"}
            >
              Smart Watches
            </Typography>
          </Grid>
          <Grid xs={6} item>
            <Link
              to="/electronics"
              style={{ textDecoration: "none", textAlign: "end" }}
            >
              <li style={{ fontSize: ".9rem" }}>Go to shop</li>
            </Link>
          </Grid>
        </Grid>
        <WatchesCarousel />
      </Container>
    </>
  );
}
