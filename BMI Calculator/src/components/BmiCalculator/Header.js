import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div className="text-center mb-4">
      <Typography variant="h3">BMI Calculator</Typography>
      <Typography>Calculate your Body Mass Index</Typography>
    </div>
  );
};

export default Header;
