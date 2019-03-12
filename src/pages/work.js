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
             <p>We helped Bitso introduce an esay way to Buy and Sell Bitcoin and Criptocurrencies.</p>
             </Link>
            </div>
            <div className="c-feature">
            <img src={require('../assets/images/example-thumb-2.jpg')} alt="thumb"></img> 
                <p>We helped Bitso introduce an esay way to Buy and Sell Bitcoin and Criptocurrencies.</p>
            </div>
            <div className="c-feature">
            <img src={require('../assets/images/example-thumb-3.jpg')} alt="thumb"></img> 
                <p>We helped Bitso introduce an esay way to buy and sell criptocurrencies.</p>
            </div>
            <div className="c-feature">
            <img src={require('../assets/images/example-thumb-4.jpg')} alt="thumb"></img> 
               <p>Otro más perrissssss..</p>
            </div>
        </div>
    </div>
  )