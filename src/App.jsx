import HomePage from "./pages/Home";
import AboutHomePage from "./pages/About/index";
import PlanSection from "./pages/Plan/index";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".from-left", {
      distance: "10px",
      origin: "left",
      duration: 1200,
    });

    ScrollReveal().reveal(".from-right", {
      distance: "10px",
      origin: "right",
      duration: 1200,
    });

    ScrollReveal().reveal(".from-top", {
      distance: "10px",
      origin: "top",
      duration: 1000,
    });

    ScrollReveal().reveal(".from-left-me", {
      distance: "100px",
      origin: "left",
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/About-us" element={<AboutHomePage />}></Route>
        <Route path="/Plan" element={<PlanSection />}></Route>
      </Routes>
    </>
  );
}

export default App;
