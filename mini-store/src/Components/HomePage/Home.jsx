import React from "react";
import NavAndHero from "./NavAndHero";
import Products from "./Products/Products";
import Offre from "./Offre";
import ReviewsAndSubs from "./ReviewsAndSubs";
import ShopInsta from "./ShopInsta";

export default function Home() {
  return (
    <>
      <NavAndHero />
      <Products />
      <Offre />
      <ReviewsAndSubs />
      <ShopInsta />
    </>
  );
}
