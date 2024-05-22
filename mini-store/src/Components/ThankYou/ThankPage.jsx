import React, { useContext } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

import thankyou from "../../Images/thankyou.svg";
import person from "../../Images/person.png";

import { ProductsContext } from "../HomePage/Products/ProductsContext";

export default function ThankPage() {
  const { cartProducts } = useContext(ProductsContext);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  // const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Container>
        <Grid
          container
          my={10}
          flexDirection={"column"}
          alignItems={"center"}
          gap={3}
        >
          <Typography
            variant={isSm ? "h4" : "h2"}
            fontWeight="600"
            color="secondary"
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            Thank you, Enjoy!
          </Typography>
          <img src={thankyou} alt="" />
          <Typography
            variant={isSm ? "subtitle1" : "h5"}
            fontWeight="600"
            color="secondary"
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            We can't wait to see you again!{" "}
            <img src={person} alt="" style={{ width: isSm ? "15%" : "5%" }} />
          </Typography>
          <Typography textAlign={"center"}>
            One of our agents will contact you for the confirmation!
          </Typography>
          <Button variant="contained">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                letterSpacing: "2px",
              }}
            >
              Back to home
            </Link>
          </Button>
        </Grid>
      </Container>
    </>
  );
}
