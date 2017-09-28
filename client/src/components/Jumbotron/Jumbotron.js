import React from "react";
import "./Jumbotron.css";
import background from "../../assets/img/martini-image.jpg"

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <img src={background} className="backgroundImage" alt="martini" />
    <h1>Martini-Shaken</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.recipepuppy.com/about/api/"
    >
      Absolut Drinks
    </a>
  </div>
);

export default Jumbotron;
