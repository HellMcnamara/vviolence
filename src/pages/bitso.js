import React from "react";
import { Link } from "gatsby"
import Header from "../components/header";

export default () => (
  <div className="Wrapper-Worklist">
    <Header />
    <div className="FeatureProject">
      <section className="HeroProject">
        <h1>Introducing an easy way to buy and sell criptocurrencies.</h1>
        <div className="HeroProject_Roles">
          <div>
            <h4>Role:</h4>
            <p>Product Designer</p>
          </div>
          <div>
            <h4>Support roles:</h4>
            <p>Interaction Designer, Visual Designer.</p>
          </div>
          <div>
            <h4>Date:</h4>
            <p>June 2018 - present.</p>
          </div>
          <div>
            <h4>Platforms</h4>
            <p>Web, Android, iOS.</p>
          </div>
        </div>
      </section>

      <div className="rowCase-center">
        <img src={require("../assets/images/bitso/bitso-hero.png")} alt="thumb" />
        <div className="description-center">
          <h3>The Challenge:</h3>
          <p>Simplifying the crypto experience as much as possible.</p>
        </div>
      </div>

      <div className="rowCase">
        <div className="rowCase-description">
          <p className="intro"><a href="https://bitso.com" target="_blank" rel="noopener noreferrer" className="link">Bitso</a>, the first and leading cryptocurrency exchange platform in Mexico and Latin America, has around 500K users (more than 60% of the national market). The company started operations in April of 2014.</p>
        </div>
        <div className="rowCase-image">
          <img src={require("../assets/images/bitso/bitso-process-1.png")} alt="thumb" />
        </div>
      </div>
      
      <div className="rowCase-center">
        <div className="description text-center">
          <p className="quote-mini">“ With the mission of democratizing access to crypto, the platform's challenge was to attract <strong>new users, especially the none experts</strong>.”</p>
        </div>
      </div>
      
      <div className="rowCase">
        <div className="rowCase-image">
          <img src={require("../assets/images/bitso/bitso-process-2.png")} alt="thumb" />
        </div>
        <div className="rowCase-description">
          <h3>Human-Centered as a mindset</h3>
          <p>More than a process, we want to embrace a mindset which will help us solve complex problems.</p>
          <p>With our clients, we conducted a series of activities that help us empathize and understand better the users. In this stage, we choose to conduct research.</p>
          <p>Research helped us to frame Dani as our potential non-user. Part of the things that we discover about Dani was that she/he wanted to be involved in crypto or buy bitcoin, but he/she doesn't feel confident.</p>
          <p className="quote-mini">“ We decided to <strong>re-design and simplify the App</strong> experience and helps Dani to buy her/his first Bitcoin.”</p>
        </div>
      </div>


      <div className="rowCase">
        <div className="rowCase-description">
          <h3>Visual Design</h3>
          <p>At the beginning of this phase, as a team we had two clear objectives that we wanted to achieve:</p>
          <ul className="list">
            <li>Visual approval of some key screens.</li>
            <li>User flow review from the most important features.</li>
          </ul>
          <p>As we were his external design team, we had different <strong>collaborative activities</strong> to get good feedback from stakeholders that were involved in the product development. Make them part of this process let us understand better legal, biz or engineering constraints.</p>
        </div>
        <div className="rowCase-image">
          <img src={require("../assets/images/bitso/bitso-process-3.png")} alt="thumb" />
        </div>
      </div>

      <div className="rowCase-center">
        <div className="description text-center">
          <p className="quote-mini">“ When we communicated our design decisions <strong>we always put in context Dani</strong>. Bitso appropriated this mindset and got used to questioning them in this way.”</p>
        </div>
      </div>

      <div className="rowCase-center">
        <div className="description-center">
          <h3>Iteration:</h3>
          <p>As we were his external design team, we had different <strong>collaborative activities</strong> to get good feedback from stakeholders that were involved in the product development. Make them part of this process let us understand better legal, biz or engineering constraints.</p>
        </div>
        <img src={require("../assets/images/bitso/bitso-iteration.png")} alt="thumb" />
      </div>

      <div className="rowCase-center">
        <div className="description text-center">
          <p className="quote-mini">“ Crypto will not stop being complex, but we are convinced that <strong>we can achieve much by simplifying the interface</strong> with which people interact...”</p>
        </div>
      </div>
      
      <div className="rowCase-center">
        <div className="description text-center">
          <img src={require("../assets/images/bitso/bitso-ui-iterations.gif")} alt="thumb" />
        </div>
      </div>

      <div className="rowCase">
        <div className="rowCase-image">
          <img src={require("../assets/images/bitso/bitso-ui-stack.png")} alt="thumb" />
        </div>
        <div className="rowCase-description">
          <h3>UI Stack</h3>
          <p>It's a framework that I learned through one of my favorites books. Consists of the five states of a single screen’s user interface, as well as how the user moves through a living product.</p>
          <p>For the sake of time and running behind the second goal, I asked visual designers first approach the ideal state of a feature. After that, they worked mapping the remaining four. </p>
        </div>
      </div>

      <div>
        <img src={require("../assets/images/bitso/bitso-stack.png")} alt="thumb" />
      </div>


      <div className="rowCase">
        <div className="rowCase-description">
          <h3>Prototyping</h3>
          <p>Interacting with a screen could be challenging in terms of the metaphors a system should give the user. Micro-interactions <strong>help Ui tell a story</strong>, help our user understand better the relationship the product they interact with.</p>
          <p>The app was especially concerned <strong>giving clarity in the flows and feedback</strong> to our users at the same time used cards as a metaphor of space.</p>
          <p>As and artifact, prototypes communicate better with our clients.</p>
        </div>
        <div className="rowCase-image">
          <img src={require("../assets/images/bitso/bitso-prototyping.png")} alt="thumb" />
          {/* <video src="https://migue.design/portfolio/public/img/portfolio/escuchame/stratelgy-escuchame.mp4" loop autoplay="true"></video>	 */}
        </div>
      </div>

      <div className="rowCase-center">
        <div className="description text-center">
          <div className="middle">
            <video src={require("../assets/images/bitso/bitso-prototyping.mp4")} loop autoplay="true"></video>
          </div>
          <div className="middle">
            <img src={require("../assets/images/bitso/bitso-wireframes.jpg")} alt="thumb" />
          </div>
        </div>
      </div>

      <div className="rowCase">
        <div className="middle">
          <h3>Collaboration</h3>
          <p>Create <strong>a common language between different roles and mindsets</strong>, pushed me to explore different methods to prioritize things, ask for feedback, remind our user and also motivate both teams to achieve our goal.</p>
          <img src={require("../assets/images/bitso/bitso-board.jpg")} alt="thumb" />
          <img src={require("../assets/images/bitso/bitso-flow.jpg")} alt="thumb" />
        </div>
        <div className="middle">
          <img src={require("../assets/images/bitso/bitso-team.jpg")} alt="thumb" />
          <img src={require("../assets/images/bitso/bitso-trello.jpg")} alt="thumb" />
          <img src={require("../assets/images/bitso/bitso-process-team.jpg")} alt="thumb" />
        </div>
      </div>

      <div className="rowCase-center">
        <div className="description-center">
          <h3>Launch the Apps</h3>
          <p>As we were his external design team, we had different <strong>collaborative activities</strong> to get good feedback from stakeholders that were involved in the product development. Make them part of this process let us understand better legal, biz or engineering constraints.</p>
        </div>
      </div>

      <div>
        <img src={require("../assets/images/bitso/bitso-landing.jpg")} alt="thumb" />
      </div>

      <div className="rowCase-center">
        <div className="description text-center">
          <p className="quote-mini">“ With our work simplifying the experience, <strong>we achieve our challenge</strong> and let Dani buy Bitcoin for the first time. ”</p>
        </div>
      </div>

      <div>
        <img src={require("../assets/images/bitso/bitso-mockups-app.jpg")} alt="thumb" />
      </div>



      <div className="rowCase">
        <div className="rowCase-image">
          <img src={require("../assets/images/bitso/bitso-4taps.gif")} alt="thumb" />
        </div>
        <div className="rowCase-description">
          <p className="quote-mini">“ With the new Bitso app, <strong>we make it possible for anyone</strong> to buy Bitcoin and other cryptocurrencies with only 4 taps.”</p>
        </div>
      </div>

      <div className="rowCase">
        <div className="rowCase-description">
          <h3>Business Impact</h3>
          <ul className="list">
            <li>More than 60,000 downloads after the relaunch  of the Bitso App</li>
            <li>New 80,000 accounts created.</li>
            <li>More positive reviews of the app.</li>
            <li>A decrease of support tickets.</li>
            <li>Increased of fundings in Bitso accounts.</li>
          </ul>
          <p>We're currently working on improve Bitso Transfer and relaunch the website :) <span role="img" aria-label="adios">👋</span></p>
        </div>
      </div>

      <div className="Next">
      <Link to="/citi">
      <p> Citi<span role="img" aria-label="coin"> 💳 </span>| Next Project</p>
      </Link>
      </div>
    </div>
  </div>
);
