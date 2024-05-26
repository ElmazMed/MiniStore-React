import React from "react";
import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CheckoutForm from "./CheckoutForm";

import "../Checkout/Checkout.css";
import OrderSumm from "./OrderSumm";
import { useTheme } from "@emotion/react";
import Subscription from "../HomePage/Subscription";
import ShopInsta from "../HomePage/ShopInsta";

export default function Checkout() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Stack
        style={{
          backgroundColor: "#EDF1F3",
          overflow: "hidden",
        }}
        p={5}
        mb={10}
      >
        <Container>
          <Typography
            variant="h3"
            textTransform={"uppercase"}
            textAlign={"center"}
            fontWeight={"300"}
          >
            Checkout
          </Typography>
        </Container>
      </Stack>
      <Container mt={20}>
        <Grid container flexDirection={isSm ? "column-reverse" : "row"}>
          <Grid xs={12} md={6} mb={8} item>
            <Typography variant="h6" textTransform={"uppercase"} mb={3}>
              Billing details:
            </Typography>
            <CheckoutForm />
          </Grid>
          <Grid
            xs={12}
            md={6}
            mb={3}
            display={"flex"}
            justifyContent={isSm ? "center" : "flex-end"}
          >
            <OrderSumm />
          </Grid>
        </Grid>
      </Container>
      <Subscription />
      <ShopInsta />
    </>
  );
}
