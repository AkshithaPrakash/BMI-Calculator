import React from "react";
import { Container, Typography } from "@material-ui/core";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          Created by Akshitha ❤️
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
