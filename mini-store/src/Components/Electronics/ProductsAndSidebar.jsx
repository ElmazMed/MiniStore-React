import React, { useContext, useState } from "react";

import { Button, Grid, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ProductsContext } from "../HomePage/Products/ProductsContext";

import SideBar from "./SideBar";

export default function ProductsAndSidebar() {
  const { products, setProductCounter, productCounter } =
    useContext(ProductsContext);

  const [categoriesFilter, setCategoriesFilter] = useState("all");

  //PAGINATION//
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProducts = products.slice(firstProduct, lastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //======= PAGINATION ========//

  const handleAddToCart = () => {
    setProductCounter(productCounter + 1);
  };

  const handleAllBtn = () => {};
  /* const handlePhonesBtn = () => {
    const phones = categoriesFilter.filter((p) => p.category === "phones");
    setCategoriesFilter(phones);
  };

  const handleWatchesBtn = () => {
    const watches = categoriesFilter.filter((p) => p.category === "watches");
    setCategoriesFilter(watches);
  }; */

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredProduct(id);
  };
  const handleMouseOut = () => {
    setHoveredProduct(null);
  };

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
                    onMouseOver={() => handleMouseOver(p.id)}
                    onMouseOut={handleMouseOut}
                  >
                    <Grid width={"75%"} position={"relative"}>
                      <img src={p.image} width={"100%"} alt="" />

                      <Button
                        className="add-to-cart-btn"
                        variant="contained"
                        style={{
                          position: "absolute",
                          bottom: hoveredProduct === p.id ? "20%" : "12%",
                          marginInline: "3.3%",
                          letterSpacing: "1px",
                          borderRadius: "0",
                          visibility:
                            hoveredProduct === p.id ? "visible" : "hidden",
                          transition: "all .5s ease-in-out",
                          opacity: hoveredProduct === p.id ? "1" : "0",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "75%",
                        }}
                        // onClick={handleAddToCart()}
                        endIcon={<ShoppingCartIcon />}
                      >
                        Add to cart
                      </Button>
                    </Grid>
                    <Grid container xs={12} alignItems={"center"} width={"75%"}>
                      <Grid xs={6}>
                        <Typography
                          variant="subtitle1"
                          textTransform={"uppercase"}
                        >
                          {p.name}
                        </Typography>
                      </Grid>
                      <Grid xs={6}>
                        <Typography
                          variant="subtitle1"
                          textAlign={"end"}
                          color={"secondary"}
                        >
                          ${p.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            {/* Pagination */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              {[
                ...Array(Math.ceil(products.length / productsPerPage)).keys(),
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
