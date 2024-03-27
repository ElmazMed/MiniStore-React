import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavAndHero from "./Components/HomePage/NavAndHero";

function App() {
  return (
    <>
      <NavAndHero />

      <Routes>
        <Route path="/Home" element={<NavAndHero />} />
      </Routes>
    </>
  );
}

export default App;
