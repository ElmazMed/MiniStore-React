import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import CheckoutForm from "./CheckoutForm";

import "../Checkout/Checkout.css";

export default function Checkout() {
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
        <Grid container>
          <Grid xs={12} md={6}>
            <Typography variant="h6" textTransform={"uppercase"} mb={3}>
              Billing details:
            </Typography>
            <CheckoutForm />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h6" textTransform={"uppercase"} mb={3}>
              Additional information:
            </Typography>
            <form action="">
              <label htmlFor="">Order notes (optional)</label>
              <input
                type="text"
                placeholder="Notes about your order. Like special notes for delivery."
              />
            </form>
          </Grid>
          <Grid xs={12}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Cash on delivery"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Cash on delivery"
                  control={<Radio />}
                  label="Cash on delivery"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid xs={12} mt={3}>
            <Button variant="contained" className="checkout-cta">
              Place an order
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
