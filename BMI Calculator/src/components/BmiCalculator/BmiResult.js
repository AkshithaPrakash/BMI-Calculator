import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const BmiResult = ({ bmi, weightMessage }) => {
  let bmiStatus, cardClass;

  if (bmi < 18.5) {
    bmiStatus = "Underweight";
    cardClass = "bg-danger text-white";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiStatus = "Normal weight";
    cardClass = "bg-success text-white";
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = "Overweight";
    cardClass = "bg-warning text-dark";
  } else {
    bmiStatus = "Obese";
    cardClass = "bg-danger text-white";
  }

  return (
    <div className="mt-4">
      {bmi ? (
        <Card className={cardClass}>
          <CardContent>
            <Typography variant="h5">Your BMI</Typography>
            <Typography>BMI: {bmi}</Typography>
            <Typography>BMI Status: {bmiStatus}</Typography>
            <Typography>{weightMessage}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography>
          Please enter your weight and height to calculate your BMI.
        </Typography>
      )}
    </div>
  );
};

export default BmiResult;
