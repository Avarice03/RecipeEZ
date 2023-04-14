import React from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import "../stylesheets/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="home-hero-content">
          <h1>RecipeEZ</h1>
        </div>
      </div>
      <div className="home-navigation-container">
        <Navigation/>
      </div>
      <div className="home-filters-container"></div>
      <div className="home-main-container">
        <Outlet/>
      </div>
      <div className="home-footer">
        <small>Uplift Code Camp</small>
      </div>
    </div>
  );
}

export default Home;
