import React from "react";
import { Link } from "gatsby"
import Header from "../components/header-w";

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

      <div className="rowCase-center">
        <div className="description text-center">
          <p className="quote-mini">"To 2020, Citibanamex want to be the <strong>#1 digital Bank</strong>.”</p>
        </div>
      </div>

      <div className="rowCase">
        <div className="rowCase-description">
          <h3>Tuesday —  Design for</h3>
          <p>We ran activities like empathy maps, journey mapping and user personas that help us a solution that helps Citibanamex meet their business goals.</p>
          <p>Mapping the user journey, let us identify user's pains, 22 opportunities to <strong>improve the service</strong> and get a little closer to be the best digital banking experience in Mexico.</p>
          <p>Later we chose only 5 that met the following characteristics: Had a <strong>business impact, be actionable and Viable in 6 months</strong>.</p>
        </div>
        <div className="rowCase-image">
          <img src={require("../assets/images/citi/citi-process-2.png")} alt="thumb" />
        </div>
      </div>
      <div className="rowCase-center">
        <div className="description text-center">
          <p className="quote-mini">"Our user has to be able to enter the app for the first time <strong>without friction,</strong> without the need to go to the bank and without the assistance of an executive.”</p>
        </div>
      </div>

      <div className="rowCase">
         <div className="rowCase-image">
          <img src={require("../assets/images/citi/citi-process-4.gif")} alt="thumb" />
        </div>
        <div className="rowCase-description">
          <h3>Wednesday and Tuesday</h3>
          <p>We took <strong>2 days to conceptualize and prototype</strong> a solution that gives the users an easy way to access Citibanamex's app.</p>
          <p>Things like user personas and technological constraints <strong>were considered</strong> for the solution we were building.</p>
        </div>
      </div>

      <div className="rowCase-center">
        <div className="description-center">
          <h3>Visual design</h3>
          <p>After our wireframe session, I was in charge to solve Citibanamex's app <strong>new visual language</strong>.</p>
          <p>I focused on using the main assets of the brand and finding a balance with a layout that will help he interface<strong> look modern</strong>.</p>
        </div>
      </div>
      <div className="rowCase">
        <div className="description-center">
          <img src={require("../assets/images/citi/citi-process-6.png")} alt="thumb" />
        </div>
      </div>


      <div className="rowCase">
        <div className="rowCase-description">
        <p>To help our clients <strong>visualize better the experience</strong>, I made a rapid prototype using Principle app.</p>
          <p>If you have short deadlines, Principle is the best tool you can choose and in this case, I only had a few hours to complete this artifact.</p>
        </div>
        <div className="rowCase-image">
        <video src={require("../assets/images/citi/principle-citi.mp4")} loop autoplay="true"></video>
        </div>
      </div>
      <div className="rowCase">
        <div className="description-center">
        <img src={require("../assets/images/citi/citi-prototype.gif")} alt="thumb" />
        </div>
      </div>

      <div className="rowCase-center">
        <div className="description-center">
          <h3>Friday</h3>
          <p>On our last day of work, <strong> we presented a keynote</strong> where we summarized the process that we had taken together during the week and how we had arrived at the solution. All tied to KPIs that will impact the business will cure users' pains and will be executed at the engineering level in no more than 6 months.</p>
        </div>
      </div>
      <div className="rowCase">
        <div className="description-center">
          <img src={require("../assets/images/citi/citi-process-7.png")} alt="thumb" />
        </div>
      </div>

      <div className="Next">
        <Link to="/sketch">
            <p> Sketch<span role="img" aria-label="Diamond"> 💎 </span>| Next Project</p>
        </Link>
      </div>

      </div>
    </div>
);
