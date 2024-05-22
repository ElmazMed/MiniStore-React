import React from "react";
import "../Checkout/Checkout.css";
export default function CheckoutForm() {
  // ADDING STATES FOR THE INPUTS TO CHANGE AND READ THE VALUE
  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Fist name *</label>
        <input type="text" required />
        <label htmlFor="">Last name *</label>
        <input type="text" required />
        <label htmlFor="">Full address *</label>
        <input
          type="text"
          placeholder="City House number and street name"
          required
        />
        <label htmlFor="">Phone *</label>
        <input type="text" required />
        <label htmlFor="">Email address (optional)</label>
        <input type="email" />
      </form>
    </>
  );
}
