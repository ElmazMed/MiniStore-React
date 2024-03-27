import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../App.css";
import smartwatch from "../../Images/smartwatch-hero.png";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

export default function NavAndHero() {
  return (
    <>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid xs={6}>
            <h2 style={{ fontWeight: "500" }}>MiniStore.</h2>
          </Grid>

          <Grid
            xs={6}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <ul style={{ display: "flex", gap: "1.2rem" }}>
              <Link style={{ textDecoration: "none" }}>
                <li>Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>Electronics</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>Contact</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li>About</li>
              </Link>
            </ul>
            <div>
              <Link>
                <SearchIcon />
              </Link>
              <Link>
                <ShoppingCartIcon />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Stack style={{ backgroundColor: "#EDF1F3", height: "30rem" }}>
        <Container>
          <Grid container alignItems="center">
            <Grid xs={6}>
              <h2>Your Products are great.</h2>
              <Button variant="contained">Shop Product</Button>
            </Grid>
            <Grid xs={6}>
              <img
                src={smartwatch}
                alt="Smart-Watch"
                style={{ maxWidth: "81%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
