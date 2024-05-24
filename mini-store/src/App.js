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

import { products } from "./Products";

//CAROUSEL SETTINGS IMPORTED TO BE USED
//FOR ALL COMPONENTS THAT WILL NEED IT
import { settings } from "./CarouselSett";

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
  const [productCounter, setProductCounter] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

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
    let addToCart = true;

    cartProducts.map((product) => {
      if (product.id === p.id) {
        addToCart = false;
        alert("Product already in cart");
      }
    });

    if (addToCart) {
      setCartProducts([
        ...cartProducts,
        {
          image: p.image,
          id: p.id,
          name: p.name,
          price: p.price,
          quantity: p.quantity,
        },
      ]);
      setProductCounter(cartProducts.length + 1);
      setState({
        open: true,
        Transition,
      });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsContext.Provider
          value={{
            products,
            productCounter,
            setProductCounter,
            cartProducts,
            setCartProducts,
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
