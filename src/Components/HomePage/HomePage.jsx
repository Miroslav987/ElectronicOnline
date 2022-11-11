import { CardMedia, Container, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="textBG">
        <h1>WELCOME ELECTRONIC</h1>
      </div>
      <div className="shadowBG"></div>
      <img
        className="imgBG"
        src="https://uonlibrary.uonbi.ac.ke/sites/uonlibrary.uonbi.ac.ke/files/2020-01/Electrical%20Engineering.jpg"
        alt=""
      />
    </>
  );
};

export default HomePage;
