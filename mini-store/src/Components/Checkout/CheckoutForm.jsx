import React, { useContext } from "react";
import "../Checkout/Checkout.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ProductsContext } from "../HomePage/Products/ProductsContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../features/addToCart/AddToCartSlice";

export default function CheckoutForm() {
  const product = useSelector((state) => state.addCart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ADDING STATES FOR THE INPUTS TO CHANGE AND READ THE VALUE

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={() => {
          navigate("/thank-you");
          dispatch(submitForm());
        }}
      >
        <label htmlFor="">Last name *</label>
        <input className="checkout-info" type="text" required />
        <label htmlFor="">Full address *</label>
        <input
          className="checkout-info"
          type="text"
          placeholder="City House number and street name"
          required
        />
        <label htmlFor="">Phone *</label>
        <input className="checkout-info" type="text" required />
        <label htmlFor="">Email address (optional)</label>
        <input className="checkout-info" type="email" />
        <label htmlFor="">Order notes (optional)</label>
        <input
          className="checkout-info"
          type="text"
          placeholder="Notes about your order. Like special notes for delivery."
        />
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
        <Button
          disabled={product.length === 0 ? true : false}
          type="submit"
          variant="contained"
          className="checkout-cta"
        >
          Place an order
        </Button>
      </form>
    </>
  );
}
