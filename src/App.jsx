import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Amenities from "./components/Amenities";
import UnitTypes from "./components/UnitTypes";
import Accommodations from "./components/Accommodations";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <AboutUs />
      <Amenities />
      <UnitTypes />
      <Accommodations />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
