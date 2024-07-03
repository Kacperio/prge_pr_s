import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import mapp from "./map.svg";
import db_i from "./databases.svg";
import kk1 from "./kk1.jpg";
import mm1 from "./mm1.jpg";

function Services() {
  return (
    <div className="services">
      <img className="kk1" src={kk1} alt="cuś" />
      <img className="mm1" src={mm1} alt="cuś" />
      <div className="map">
        <Link to="map">
          <img className="img" src={mapp} alt="cuś" />
        </Link>
        <div className="tt">Map</div>
      </div>
      <div className="database">
        <Link to="dashboard">
          <img className="img" src={db_i} alt="cuś" />
        </Link>
        <div className="tt">Database</div>
      </div>
    </div>
  );
}

export default Services;
