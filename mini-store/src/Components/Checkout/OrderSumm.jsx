import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector } from "react-redux";

export default function OrderSumm() {
  const product = useSelector((state) => state.addCart.products);

  const cartItems = product.length;
  const subtotal = [0];
  product.map((p) => subtotal.push(p.quantity * p.price));
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
