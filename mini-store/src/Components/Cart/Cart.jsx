import React, { useContext } from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Subscription from "../HomePage/Subscription";
import ShopInsta from "../HomePage/ShopInsta";
import Footer from "../HomePage/Footer";
import SubFooter from "../HomePage/SubFooter";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ProductsContext } from "../HomePage/Products/ProductsContext";

import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../features/addToCart/AddToCartSlice";
import { reduceQuantity } from "../../features/addToCart/AddToCartSlice";
import { increaseQuantity } from "../../features/addToCart/AddToCartSlice";

import "../../App.css";
import CtaCart from "./CtaCart";

export default function Cart() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const products = useSelector((state) => state.addCart.products);
  const dispatch = useDispatch();

  //REMOVE THE ITEM FORM THE CART
  const handleRemoveBtn = (p) => {
    dispatch(removeProduct(p));
  };

  // DECREASE THE QUANTITY OF THE PRODUCT IN THE CART
  const handleReduceQuantity = (p) => {
    dispatch(reduceQuantity(p));
  };

  // INCREASE THE QUANTITY OF THE PRODUCT IN THE CART
  const handleIncreaseQuantity = (p) => {
    dispatch(increaseQuantity(p));
  };

  //COUNTING THE TOTAL OF ALL THE PRODUCTS IN THE CART WITH THEIR QUANTITY
  const subtotal = [0];
  products.map((p) => subtotal.push(p.quantity * p.price));
  const total = subtotal.reduce((acc, curr) => acc + curr);

  console.log("The products are: ", products);

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
        </Container>
      </Stack>
      <Container>
        <Grid
          container
          className="cart-product-wrapper"
          mt={10}
          alignItems={"center"}
        >
          {products.map((p) => {
            return (
              <Grid
                className="cart-product-container"
                display={"flex"}
                flexDirection={isSm ? "column" : "row"}
                alignItems={isSm ? "normal" : "center"}
                key={p.id}
              >
                <Grid xs={12} md={5}>
                  <div className="cart-prodcut">
                    <img src={p.image} alt="" style={{ maxWidth: "20%" }} />
                    <div>
                      <Typography
                        variant="subtitle1"
                        textTransform={"uppercase"}
                      >
                        {p.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        color={"secondary"}
                        textTransform={"uppercase"}
                      >
                        $ {p.price}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid
                  xs={12}
                  md={7}
                  mt={isSm ? 5 : 0}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <form
                    className="cart-form"
                    style={{
                      justifyContent: isSm ? "flex-start" : "center",
                      width: isSm ? "50%" : "unset",
                    }}
                  >
                    <Button
                      onClick={() => handleReduceQuantity(p)}
                      style={{
                        boxShadow: "0px 0px 15px -3px rgba(0, 0, 0, 0.1)",
                        minWidth: "43px",
                      }}
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      value={p.quantity}
                      style={{ width: "20%" }}
                      className="cart-quantity"
                      defaultValue
                    />
                    <Button
                      onClick={() => handleIncreaseQuantity(p)}
                      style={{
                        boxShadow: "0px 0px 15px -3px rgba(0, 0, 0, 0.1)",
                        minWidth: "43px",
                      }}
                    >
                      +
                    </Button>
                  </form>
                  <Typography variant="h6" color={"secondary"}>
                    $ {p.price * p.quantity}
                  </Typography>
                  <Button onClick={() => handleRemoveBtn(p)}>
                    <DeleteOutlineIcon />
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <CtaCart total={total} />
      </Container>
      <Subscription />
      <ShopInsta />
      <Footer />
      <SubFooter />
    </>
  );
}
