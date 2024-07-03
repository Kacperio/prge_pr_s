import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import plan_wat from "./plan_wat.jpg";

function Home() {
  return (
    <div className="home">
      <Link to="details">
        <button className="details">Details about the project</button>
      </Link>
      <img className="logo1" src={plan_wat} alt="logo" />
      <h1 className="home_right_title">GEOPORTAL</h1>
      <p className="home_right_subtitle">
        Deployment of military units and their affiliated soldiers
      </p>
      <Link to="services">
        <button className="run">RUN!!</button>
      </Link>
    </div>
  );
}

export default Home;
