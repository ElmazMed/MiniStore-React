import { Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ProductsAndSidebar from "./ProductsAndSidebar";

function handleClick(event) {
  //   event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Electronic() {
  return (
    <>
      <Stack
        style={{
          backgroundColor: "#EDF1F3",
          overflow: "hidden",
        }}
        p={5}
      >
        <Container>
          <Typography
            variant="h3"
            textTransform={"uppercase"}
            textAlign={"center"}
            fontWeight={"300"}
          >
            Shop
          </Typography>

          <div
            role="presentation"
            onClick={handleClick}
            style={{ marginTop: "1.5rem" }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Breadcrumbs
              </Link>
            </Breadcrumbs>
          </div>
        </Container>
      </Stack>

      <Container>
        <ProductsAndSidebar />
      </Container>
    </>
  );
}
