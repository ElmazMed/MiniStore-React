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

import "../../App.css";
import CtaCart from "./CtaCart";

export default function Cart() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
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
                      width: isSm ? "50%" : "100%",
                    }}
                  >
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
                      style={{ width: "20%" }}
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
                  <Typography variant="h6" color={"secondary"}>
                    $ {p.price * p.quantity}
                  </Typography>
                  <Button onClick={() => handleRemoveBtn(p.id)}>
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
