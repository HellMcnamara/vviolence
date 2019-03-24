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
        <img src={require("../assets/images/sketch/sketch-1.jpg")} alt="thumb" />
        <div className="description-center">
          <h3>The Challenge:</h3>
          <p>As a foreigner, create the first Sketch community in Mexico.</p>
        </div>
      </div>
      
      <div className="rowCase">
          <div className="rowCase-image">
            <img src={require("../assets/images/sketch/sketch-2.png")} alt="thumb" />
          </div>
          <div className="rowCase-description">
          <p><a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer" className="link">Sketch</a>, is the most popular and used tool for design interfaces. Since 2017, I organized Mexico’s City official Sketch meetup.</p>
          <p>With a bunch of friends, we saw a big opportunity to build a space where designers and developers could discuss and learn about topics related to interaction design, collaboration, best practices and meet new people that every day was solved the same problems they do.</p>
          </div>
      </div>

      <div className="rowCase">
      <div className="rowCase-description">
      <p>We use surveys in order to find ways to improve the community and inquire about the topics of interest.</p>
      <p>Some of the things we have talked about are:</p>
      <ul className="list">
            <li>Prototyping.</li>
            <li>Hand Off.</li>
            <li>Design systems.</li>
            <li>Atomic Design.</li>
            <li>Tools.</li>
          </ul>
        </div>
        <div className="rowCase-image">
          <img src={require("../assets/images/sketch/sketch-3.png")} alt="thumb" />
        </div>
      </div>

      <div className="rowCase">
          <div className="rowCase-image">
            <img src={require("../assets/images/sketch/sketch-4.png")} alt="thumb" />
          </div>
          <div className="rowCase-image">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <img src={require("../assets/images/sketch/sketch-5.png")} alt="thumb" />
          </div>
      </div>


      <div className="Next">
        <Link to="/bitso">
        <p> Bitso <span role="img" aria-label="block"> 🤖 </span>| Next Project</p>
        </Link>
      </div>

      </div>
    </div>
);
