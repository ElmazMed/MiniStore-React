import React, { useContext } from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";

import Subscription from "../HomePage/Subscription";
import ShopInsta from "../HomePage/ShopInsta";
import Footer from "../HomePage/Footer";
import SubFooter from "../HomePage/SubFooter";

import DeleteIcon from "@mui/icons-material/Delete";

import { ProductsContext } from "../HomePage/Products/ProductsContext";

import "../../App.css";
import CtaCart from "./CtaCart";

export default function Cart() {
  const { cartProducts, setCartProducts, setProductCounter } =
    useContext(ProductsContext);

  //REMOVE THE ITEM FORM THE CART
  const handleRemoveBtn = (id) => {
    const removeCartProduct = cartProducts.filter((p) => p.id != id);
    setCartProducts(removeCartProduct);
    setProductCounter(cartProducts.length - 1);
  };

  // DECREASE THE QUANTITY OF THE PRODUCT IN THE CART
  const reduceQuantity = (id) => {
    const updatedCartQuantity = cartProducts.map((p) => {
      return p.id === id && p.quantity >= 2
        ? { ...p, quantity: p.quantity - 1 }
        : { ...p, quantity: p.quantity };
    });
    setCartProducts(updatedCartQuantity);
  };

  // INCREASE THE QUANTITY OF THE PRODUCT IN THE CART
  const increaseQuantity = (id) => {
    const updatedCartQuantity = cartProducts.map((p) => {
      return p.id === id ? { ...p, quantity: p.quantity + 1 } : p;
    });
    setCartProducts(updatedCartQuantity);
  };

  //COUNTING THE TOTAL OF ALL THE PRODUCTS IN THE CART WITH THEIR QUANTITY
  const subtotal = [0];
  cartProducts.map((p) => {
    subtotal.push(p.quantity * p.price);
  });
  const total = subtotal.reduce((acc, curr) => acc + curr);

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
          {cartProducts.map((p) => {
            return (
              <div className="cart-product-container" key={p.id}>
                <Grid xs={5}>
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
                <Grid xs={2}>
                  <form className="cart-form">
                    <Button
                      onClick={() => reduceQuantity(p.id)}
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
                      className="cart-quantity"
                      defaultValue
                    />
                    <Button
                      onClick={() => increaseQuantity(p.id)}
                      style={{
                        boxShadow: "0px 0px 15px -3px rgba(0, 0, 0, 0.1)",
                        minWidth: "43px",
                      }}
                    >
                      +
                    </Button>
                  </form>
                </Grid>
                <Grid
                  xs={2}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  gap={1}
                  item
                >
                  <Typography variant="h6" color={"secondary"}>
                    $ {p.price * p.quantity}
                  </Typography>
                </Grid>
                <Grid xs={3} item display={"flex"} justifyContent={"flex-end"}>
                  <Button onClick={() => handleRemoveBtn(p.id)}>
                    <DeleteIcon />
                  </Button>
                </Grid>
              </div>
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
