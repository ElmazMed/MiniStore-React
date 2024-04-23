import "./App.css";
import { Route, Routes } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import Home from "./Components/HomePage/Home";
import NavAndHero from "./Components/HomePage/NavAndHero";

import { ProductsContext } from "../src/Components/HomePage/Products/ProductsContext";

import iphone10 from "../src/Images/phone-1.png";
import iphone11 from "../src/Images/phone-2.png";
import iphone8 from "../src/Images/phone-3.png";
import iphone13 from "../src/Images/phone-4.png";

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
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsContext.Provider value={products}>
          <Home />
        </ProductsContext.Provider>
      </ThemeProvider>
      <Routes>
        <Route path="/Home" element={<NavAndHero />} />
      </Routes>
    </>
  );
}

export default App;
