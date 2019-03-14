import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div className="Wrapper-Worklist">
    <Header/> 
        <div className="FeatureWork">
            <div className="c-feature">
            <Link to="/bitso">
              <img src={require('../assets/images/example-thumb-1.jpg')} alt="thumb"></img> 
             <p>Introducing an esay way to Buy and Sell Bitcoin and  Criptocurrencies.</p>
             </Link>
            </div>
            <div className="c-feature">
            <Link to="/500">
            <img src={require('../assets/images/example-thumb-2.jpg')} alt="thumb"></img> 
                <p>Increasing 500 Latam entrepreneurs' applications for batch 10.</p>
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
               <p>Organize Mexico's City official Sketch Meetup</p>
            </Link>
            </div>
        </div>
    </div>
  )