import React from "react"
import Header from "../components/header-w"
import { Link } from "gatsby"

export default () => (
    <div className="Wrapper-Worklist">
    <Header/> 
        <div className="FeatureWork">
            <div className="c-feature">
            <Link to="/bitso">
              <img src={require('../assets/images/example-thumb-1.jpg')} alt="thumb"></img> 
             <p>Introducing an esay way to buy and Sell Bitcoin and criptocurrencies.</p>
             </Link>
            </div>
            <div className="c-feature">
            <Link to="/citi">
            <img src={require('../assets/images/example-thumb-3.jpg')} alt="thumb"></img> 
                <p>Improving first time use for Citibanamex App.</p>
            </Link>
            </div>
            <div className="c-feature">
            <Link to="/sketch"> 
            <img src={require('../assets/images/example-thumb-4.jpg')} alt="thumb"></img> 
               <p>Side project — Organize Mexico's City official Sketch Meetup</p>
            </Link>
            </div>
        </div>
    </div>
  )