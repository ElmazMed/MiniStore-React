import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ProductsContext } from "../HomePage/Products/ProductsContext";

export default function OrderSumm() {
  const { cartProducts } = useContext(ProductsContext);

  const cartItems = cartProducts.length;
  const subtotal = [0];
  cartProducts.map((p) => {
    subtotal.push(p.quantity * p.price);
  });
  const total = subtotal.reduce((acc, curr) => acc + curr);
  return (
    <>
      <div className="checkout-products-container">
        <Typography variant="h6" mb={2}>
          Order Summary:
        </Typography>
        <div className="order-summ-box">
          <Typography display={"flex"} alignItems={"center"} gap={1} mb={2}>
            <ShoppingCartIcon /> {cartItems} Item(s) in the cart
          </Typography>
          <Link to="/cart">
            <li>Details</li>
          </Link>
        </div>
        <div className="order-summ-box">
          <Typography>Subtotal</Typography>
          <Typography>${total}</Typography>
        </div>
        <div className="order-summ-box">
          <Typography>Shipping</Typography>
          <Typography>$0.00</Typography>
        </div>
        <div className="order-summ-box">
          <Typography>Tax</Typography>
          <Typography>$0.00</Typography>
        </div>
        <div className="order-summ-box">
          <Typography>Total</Typography>
          <Typography>${total}</Typography>
        </div>
      </div>
    </>
  );
}
