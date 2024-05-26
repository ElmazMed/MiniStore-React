import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";

import Fade from "@mui/material/Fade";

import { ProductsContext } from "../src/Components/HomePage/Products/ProductsContext";

import Nav from "./Components/HomePage/Nav";
import SubFooter from "./Components/HomePage/SubFooter";
import Footer from "./Components/HomePage/Footer";
import Contact from "./Components/Contact/Contact";
import Electronic from "./Components/Electronics/Electronic";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import ThankPage from "./Components/ThankYou/ThankPage";

import { useDispatch } from "react-redux";

import { products } from "./Products";

//CAROUSEL SETTINGS IMPORTED TO BE USED
//FOR ALL COMPONENTS THAT WILL NEED IT
import { settings } from "./CarouselSett";
import { addCart } from "./features/addToCart/AddToCartSlice";

const theme = createTheme({
  palette: {
    primary: { main: "#272727" },
    secondary: { main: "#72AEC8", gray: "#848484" },
  },
  typography: {
    fontFamily: ["jost"],
  },
});

function App() {
  const dispatch = useDispatch();

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  const addToCartHandler = (Transition, p) => {
    dispatch(addCart(Transition, p));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsContext.Provider
          value={{
            products,
            addToCartHandler,
            handleClose,
            state,
            settings,
          }}
        >
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/electronics" element={<Electronic />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
          <SubFooter />
        </ProductsContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
