import React from "react";
import NavAndHero from "./NavAndHero";
import Products from "./Products/Products";
import Offre from "./Offre";
import ReviewsAndSubs from "./ReviewsAndSubs";
import ShopInsta from "./ShopInsta";
import Footer from "./Footer";
import SubFooter from "./SubFooter";

export default function Home() {
  return (
    <>
      <NavAndHero />
      <Products />
      <Offre />
      <ReviewsAndSubs />
      <ShopInsta />
      <Footer />
      <SubFooter />
    </>
  );
}
