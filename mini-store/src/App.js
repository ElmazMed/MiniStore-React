import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";

import { ProductsContext } from "../src/Components/HomePage/Products/ProductsContext";

import iphone10 from "../src/Images/phone-1.png";
import iphone11 from "../src/Images/phone-2.png";
import iphone8 from "../src/Images/phone-3.png";
import iphone13 from "../src/Images/phone-4.png";

import watch1 from "../src/Images/watch-1.png";
import watch2 from "../src/Images/watch-2.png";
import watch3 from "../src/Images/watch-3.png";
import watch4 from "../src/Images/watch-4.png";
import Nav from "./Components/HomePage/Nav";
import SubFooter from "./Components/HomePage/SubFooter";
import Footer from "./Components/HomePage/Footer";
import Contact from "./Components/Contact/Contact";
import Electronic from "./Components/Electronics/Electronic";

const theme = createTheme({
  palette: {
    primary: { main: "#272727" },
    secondary: { main: "#72AEC8", gray: "#848484" },
  },
  typography: {
    fontFamily: ["jost"],
  },
});

const products = [
  {
    phones: [
      {
        id: uuidv4(),
        name: "Iphone 10",
        price: 980,
        image: iphone10,
      },
      {
        id: uuidv4(),
        name: "Iphone 11",
        price: 1100,
        image: iphone11,
      },
      {
        id: uuidv4(),
        name: "Iphone 8",
        price: 780,
        image: iphone8,
      },
      {
        id: uuidv4(),
        name: "Iphone 13",
        price: 1500,
        image: iphone13,
      },
      {
        id: uuidv4(),
        name: "Iphone 13",
        price: 1500,
        image: iphone13,
      },
    ],
    watches: [
      {
        id: uuidv4(),
        name: " Pink watch",
        price: 870,
        image: watch1,
      },
      {
        id: uuidv4(),
        name: "Heavy watch",
        price: 680,
        image: watch2,
      },
      {
        id: uuidv4(),
        name: "Spotted watch",
        price: 750,
        image: watch3,
      },
      {
        id: uuidv4(),
        name: "Black watch",
        price: 650,
        image: watch4,
      },
      {
        id: uuidv4(),
        name: "Heavy watch",
        price: 680,
        image: watch2,
      },
    ],
  },
];

console.log("the array is ", [...Array()]);

function App() {
  const [productCounter, setProductCounter] = useState(0);
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsContext.Provider
          value={{
            products,
            productCounter,
            setProductCounter,
          }}
        >
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/electronics" element={<Electronic />} />
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
