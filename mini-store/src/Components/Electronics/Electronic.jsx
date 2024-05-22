import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import ProductsAndSidebar from "./ProductsAndSidebar";

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
        </Container>
      </Stack>

      <Container>
        <ProductsAndSidebar />
      </Container>
    </>
  );
}
