import React, { useContext, useState } from "react";

import { Button, Grid, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ProductsContext } from "../HomePage/Products/ProductsContext";

import phone from "../../Images/phone-1.png";
import SideBar from "./SideBar";

export default function ProductsAndSidebar() {
  const { products, setProductCounter, productCounter } =
    useContext(ProductsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProducts = products[0].phones.slice(firstProduct, lastProduct);

  const [addToCart, setAddToCart] = useState({
    visibility: "hidden",
    mb: "12%",
    opacity: 0,
  });
  const handleAddToCart = (Transition) => () => {
    setProductCounter(productCounter + 1);
  };
  const handleMouseOver = () => {
    setAddToCart({
      ...addToCart,
      visibility: "visible",
      mb: "20%",
      opacity: "1",
    });
  };
  const handleMouseOut = () => {
    setAddToCart({
      ...addToCart,
      visibility: "hidden",
      mb: "12%",
      opacity: "0",
    });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Grid container mt={12} mb={12}>
        <Grid xs={8}>
          <div>
            <Grid container>
              {/* The First slide */}
              {currentProducts.map((p) => {
                return (
                  <Grid
                    key={p.id}
                    mr={"-54px"}
                    mb={"1.3rem"}
                    // onMouseOver={handleMouseOver}
                    // onMouseOut={handleMouseOut}
                  >
                    <Grid width={"75%"} position={"relative"}>
                      <img src={p.image} width={"100%"} alt="" />

                      <Button
                        variant="contained"
                        style={{
                          position: "absolute",
                          bottom: addToCart.mb,
                          marginInline: "3.3%",
                          letterSpacing: "1px",
                          borderRadius: "0",
                          // visibility: addToCart.visibility,
                          transition: "all .5s ease-in-out",
                          // opacity: addToCart.opacity,
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "75%",
                        }}
                        onClick={handleAddToCart()}
                        endIcon={<ShoppingCartIcon />}
                      >
                        Add to cart
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            {/* Pagination */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              {[
                ...Array(
                  Math.ceil(products[0].phones.length / productsPerPage)
                ).keys(),
              ].map((number) => (
                <Button key={number + 1} onClick={() => paginate(number + 1)}>
                  {number + 1}
                </Button>
              ))}
            </div>
          </div>
        </Grid>
        <Grid xs={4}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}
