import React, { useState } from "react";
import InputField from "./InputField";
import BmiResult from "./BmiResult";
import Header from "./Header";
import { Container, Grid, Button } from "@material-ui/core";
import "./BmiCalculator.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [weightMessage, setWeightMessage] = useState("");

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      calculateWeightAdjustment(bmiValue);
    } else {
      setBmi(null);
      setWeightMessage("");
    }
  };

  const calculateWeightAdjustment = (bmiValue) => {
    const heightInMeters = height / 100;
    const minWeight = 18.5 * heightInMeters * heightInMeters;
    const maxWeight = 24.9 * heightInMeters * heightInMeters;

    if (bmiValue < 18.5) {
      setWeightMessage(
        `You need to gain at least ${(minWeight - weight).toFixed(
          1
        )} kg to reach a BMI of 18.5.`
      );
    } else if (bmiValue > 24.9) {
      setWeightMessage(
        `You need to lose at least ${(weight - maxWeight).toFixed(
          1
        )} kg to reach a BMI of 24.9.`
      );
    } else {
      setWeightMessage("You are within the optimal BMI range.");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setWeightMessage("");
  };

  return (
    <Container className="bmi-container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Header />
          <InputField
            label="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            unit="kg"
          />
          <InputField
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            unit="cm"
          />
          <div className="button-group">
            <Button variant="contained" color="primary" onClick={calculateBmi}>
              Calculate BMI
            </Button>
            <Button variant="contained" color="secondary" onClick={resetForm}>
              Reset
            </Button>
          </div>
          <BmiResult bmi={bmi} weightMessage={weightMessage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BmiCalculator;
