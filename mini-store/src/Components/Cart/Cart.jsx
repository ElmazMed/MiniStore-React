import {
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Subscription from "../HomePage/Subscription";
import ShopInsta from "../HomePage/ShopInsta";
import Footer from "../HomePage/Footer";
import SubFooter from "../HomePage/SubFooter";
import CloseIcon from "@mui/icons-material/Close";
import iphone from "../../Images/phone-2.png";

import "../../App.css";

export default function Cart() {
  const [productQuantity, setProductQuantity] = useState(0);
  function handleClick(event) {
    //   event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
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
            Cart
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
        <Grid container my={10} alignItems={"center"}>
          <div className="cart-product-container">
            <Grid xs={6}>
              <div className="cart-prodcut">
                <img src={iphone} alt="" style={{ maxWidth: "20%" }} />
                <div>
                  <Typography variant="subtitle1" textTransform={"uppercase"}>
                    Iphone 13
                  </Typography>
                  <Typography
                    variant="h6"
                    color={"secondary"}
                    textTransform={"uppercase"}
                  >
                    $ 1500
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid xs={3}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => setProductQuantity(productQuantity - 1)}
                  style={{ boxShadow: "0px 0px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  -
                </Button>
                <input
                  type="number"
                  value={productQuantity < 1 ? 1 : productQuantity}
                  className="cart-quantity"
                />
                <Button
                  onClick={() => setProductQuantity(productQuantity + 1)}
                  style={{ boxShadow: "0px 0px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  +
                </Button>
              </div>
            </Grid>
            <Grid
              xs={3}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={1}
            >
              <Typography variant="h6" color={"secondary"}>
                $ 1500
              </Typography>
              <Button>
                <CloseIcon />
              </Button>
            </Grid>
          </div>
          <div className="divider"></div>
        </Grid>
      </Container>
      <Subscription />
      <ShopInsta />
      <Footer />
      <SubFooter />
    </>
  );
}
