import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../App.css";
import { Link } from "react-router-dom";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { ProductsContext } from "./Products/ProductsContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Nav() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const { productCounter } = useContext(ProductsContext);
  const [mobileMenu, setMobileMenu] = useState({
    display: "none",
    open: false,
  });

  const handleOpenButton = () => {
    setMobileMenu({ mobileMenu, display: "block", open: true });
  };
  const handleCloseButton = () => {
    setMobileMenu({ mobileMenu, display: "none", open: false });
  };
  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid xs={6} item>
          <h2 style={{ fontWeight: "500" }}>MiniStore.</h2>
        </Grid>

        <Grid
          xs={6}
          item
          display="flex"
          justifyContent={{ xs: "flex-end", md: "space-between" }}
          alignItems="center"
          position={"relative"}
        >
          {isMd && (
            <nav
              style={{ display: "flex", gap: "2.2rem", alignItems: "center" }}
            >
              <ul style={{ display: "flex", gap: "2.2rem" }}>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <li>Home</li>
                </Link>
                <Link to="/electronics" style={{ textDecoration: "none" }}>
                  <li>Electronics</li>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <li>Contact</li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li>About</li>
                </Link>
              </ul>
              <div style={{ position: "relative" }}>
                <div className="counter">{productCounter}</div>
                <Link>
                  <ShoppingCartIcon color="primary" />
                </Link>
              </div>
            </nav>
          )}

          {isSm && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2.2rem",
              }}
            >
              <div style={{ position: "relative" }}>
                <div className="counter">{productCounter}</div>

                <Link>
                  <ShoppingCartIcon color="primary" />
                </Link>
              </div>
              <Button>
                <MenuIcon
                  style={{ display: mobileMenu.open ? "none" : "block" }}
                  onClick={handleOpenButton}
                />
                <CloseIcon
                  style={{ display: mobileMenu.open ? "block" : "none" }}
                  onClick={handleCloseButton}
                />
              </Button>
              <div
                style={{
                  backgroundColor: "#ffff",
                  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                  padding: "1rem",
                  position: "absolute",
                  top: "55px",
                  right: "-16px",
                  width: "100%",
                  zIndex: "2",
                  display: mobileMenu.display,
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.2rem",
                  }}
                >
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <li>Home</li>
                  </Link>
                  <Link to="/electronics" style={{ textDecoration: "none" }}>
                    <li>Electronics</li>
                  </Link>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <li>Contact</li>
                  </Link>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <li>About</li>
                  </Link>
                </ul>
              </div>
            </nav>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
