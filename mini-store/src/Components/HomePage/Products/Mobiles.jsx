import React from "react";
import "../../../App.css";
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MobilesCarousel from "./MobilesCarousel";

export default function Mobiles() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Container>
        <Grid container mb={5}>
          <Grid xs={6} item>
            <Typography
              variant={isSm ? "h6" : "h5"}
              fontSize={isSm ? "1rem" : "1.4rem"}
              textTransform={"uppercase"}
            >
              Mobile Products
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
        <MobilesCarousel />
      </Container>
    </>
  );
}
