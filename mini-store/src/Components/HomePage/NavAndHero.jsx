import React, { useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../App.css";
import smartwatch from "../../Images/smartwatch-hero.png";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { ProductsContext } from "./Products/ProductsContext";

export default function NavAndHero() {
  const { productCounter } = useContext(ProductsContext);
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
            position={"relative"}
          >
            <ul style={{ display: "flex", gap: "2.2rem" }}>
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
              <div className="counter">{productCounter}</div>
              <Link style={{ textDecoration: "none" }}>
                <SearchIcon color="primary" />
              </Link>
              <Link>
                <ShoppingCartIcon color="primary" />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Stack style={{ backgroundColor: "#EDF1F3", height: "30rem" }}>
        <Container>
          <Grid container alignItems="center">
            <Grid xs={6}>
              <h2
                style={{
                  fontSize: "3.9rem",
                  fontWeight: "300",
                  textTransform: "uppercase",
                }}
              >
                Your Products are great.
              </h2>
              <Button
                variant="contained"
                color="primary"
                style={{
                  textTransform: "uppercase",
                  borderRadius: "0",
                  fontWeight: "200",
                  fontSize: "1rem",
                }}
              >
                Shop Product
              </Button>
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
