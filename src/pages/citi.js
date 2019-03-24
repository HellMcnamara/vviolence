import React from "react";
import { Link } from "gatsby"
import Header from "../components/header";

export default () => (
  <div className="Wrapper-Worklist">
    <Header />
    <div className="FeatureProject">
      <section className="HeroProject">
        <h1>Improving first use for Citibanamex App.</h1>
        <div className="HeroProject_Roles">
          <div>
            <h4>Role:</h4>
            <p>Visual and interaction designer.</p>
          </div>
          <div>
            <h4>Support roles:</h4>
            <p>Strategy.</p>
          </div>
          <div>
            <h4>Date:</h4>
            <p>December 2017 - 1 week.</p>
          </div>
        </div>
      </section>

      <div className="rowCase-center">
        <img src={require("../assets/images/citi/citi-hero.png")} alt="thumb" />
        <div className="description-center">
          <h3>The Challenge:</h3>
          <p>Use Design sprint methodology and generate value for Citibanamex clients through the digital banking experience in five days.</p>
        </div>
      </div>

      <div className="rowCase">
        <div className="rowCase-description">
          <p className="quote"><a href="https://bitso.com" target="_blank" rel="noopener noreferrer" className="link">Bitso</a>, the first and leading cryptocurrency exchange platform in Mexico and Latin America, has around 500K users (more than 60% of the national market). The company started operations in April of 2014.</p>
        </div>
        <div className="rowCase-image">
          <img src={require("../assets/images/bitso/bitso-process-1.png")} alt="thumb" />
        </div>
      </div>
      
      <div className="rowCase-center">
        <div className="description text-center">
          <p>“ With the mission of democratizing access to crypto, the platform's challenge was to attract <strong>new users, especially the none experts</strong>.”</p>
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
