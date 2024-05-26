import React, { useContext, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductsContext } from "../HomePage/Products/ProductsContext";
import SideBar from "./SideBar";

export default function ProductsAndSidebar() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { products, addToCartHandler } = useContext(ProductsContext);
  const [filtredProducts, setFiltredProducts] = useState(products);

  //PAGINATION//
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isSm ? 4 : 9;
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProducts = filtredProducts.slice(firstProduct, lastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //======= PAGINATION ========//

  const handleAddToCart = (p) => () => {
    addToCartHandler(p);
  };

  const handleAllBtn = () => {
    setFiltredProducts(products);
  };
  const filterCategory = (category) => {
    const filterBtn = products.filter(
      (current) => current.category === category
    );
    setFiltredProducts(filterBtn);
  };

  const filterPrice = (price) => {
    const filterBtn = products.filter((p) => {
      return price === "< 700"
        ? p.price < 700
        : price === "700 - 800"
        ? p.price >= 700 && p.price <= 800
        : price === "800 - 900"
        ? p.price >= 800 && p.price <= 900
        : p.price > 900;
    });
    setFiltredProducts(filterBtn);
  };

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredProduct(id);
  };
  const handleMouseOut = () => {
    setHoveredProduct(null);
  };

  return (
    <>
      <Grid
        container
        mt={12}
        mb={12}
        flexDirection={isSm ? "column-reverse" : "row"}
      >
        <Grid xs={12} md={8} item>
          <div>
            <Grid container>
              {currentProducts.map((p) => {
                return (
                  <Grid
                    key={p.id}
                    mr={isSm ? "0" : "-20px"}
                    mb={"1.3rem"}
                    onMouseOver={() => handleMouseOver(p.id)}
                    onMouseOut={handleMouseOut}
                    xs={6}
                    md={4}
                    item
                  >
                    <Grid
                      width={isSm ? "85%" : "75%"}
                      position={"relative"}
                      item
                    >
                      <img src={p.image} width={"100%"} alt="" />

                      <Button
                        variant="contained"
                        style={{
                          position: "absolute",
                          bottom: hoveredProduct === p.id ? "20%" : "12%",
                          marginInline: "3.3%",
                          letterSpacing: isSm ? "0" : "1px",
                          borderRadius: "0",
                          visibility:
                            hoveredProduct === p.id ? "visible" : "hidden",
                          transition: "all .5s ease-in-out",
                          opacity: hoveredProduct === p.id ? "1" : "0",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "80%",
                          paddingInline: isSm ? "0" : "1rem",
                        }}
                        onClick={handleAddToCart(p)}
                        endIcon={<ShoppingCartIcon />}
                      >
                        Add to cart
                      </Button>
                    </Grid>
                    <Grid
                      container
                      xs={12}
                      item
                      alignItems={"center"}
                      width={isSm ? "85%" : "75%"}
                    >
                      <Grid xs={8} item>
                        <Typography
                          variant={isSm ? "subtitle2" : "subtitle1"}
                          textTransform={"uppercase"}
                        >
                          {p.name}
                        </Typography>
                      </Grid>
                      <Grid xs={4} item>
                        <Typography
                          variant={isSm ? "subtitle2" : "subtitle1"}
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

        <Grid xs={12} md={4} item>
          <SideBar
            filterCategory={(category) => filterCategory(category)}
            filterPrice={(price) => {
              filterPrice(price);
            }}
            handleAllBtn={handleAllBtn}
          />
        </Grid>
      </Grid>
    </>
  );
}
