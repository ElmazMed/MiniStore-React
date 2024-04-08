import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import NavAndHero from "./Components/HomePage/NavAndHero";

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
      <Routes>
        <Route path="/Home" element={<NavAndHero />} />
      </Routes>
    </>
  );
}

export default App;
