import React from "react";
import BmiCalculator from "./components/BmiCalculator/BmiCalculator";
import Footer from "./components/BmiCalculator/Footer";
import "./styles/styles.css";

function App() {
  return (
    <div className="app">
      <BmiCalculator />
      <Footer />
    </div>
  );
}

export default App;
