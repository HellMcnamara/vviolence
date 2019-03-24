import React from "react";
import { Link } from "gatsby"
import Header from "../components/header";

export default () => (
  <div className="Wrapper-Worklist">
    <Header />
    <div className="FeatureProject">
      <section className="HeroProject">
        <h1>Organize Mexico's City official Sketch Meetup</h1>
        <div className="HeroProject_Roles">
          <div>
            <h4>Role:</h4>
            <p>Organizer</p>
          </div>
          <div>
            <h4>Date:</h4>
            <p>November 2017 - present</p>
          </div>
        </div>
      </section>

      <div className="rowCase-center">
        <img src={require("../assets/images/sketch/sketch-hero.png")} alt="thumb" />
        <div className="description-center">
          <h3>The Challenge:</h3>
          <p>Use Design sprint methodology and <strong>generate value</strong> for Citibanamex clients through the digital banking experience in <strong>five days</strong>.</p>
        </div>
      </div>
      
      <div className="rowCase">
        <div className="rowCase-image">
          <img src={require("../assets/images/citi/citi-process-1.png")} alt="thumb" />
        </div>
        <div className="rowCase-description">
          <h3>Monday — The problem</h3>
          <p>We took the time to understand with our clients what the business challenges were, how digital banking industry in Mexico looks and the current state of their product.</p>
        </div>
      </div>

      <div className="Next">
        <Link to="/500">
            <p>Next Project</p>
        </Link>
      </div>

      </div>
    </div>
);
