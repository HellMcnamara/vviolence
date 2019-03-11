import React from "react"
import Header from "../components/header"

export default () => (
    <div className="Wrapper-Worklist">
    <Header/> 
        <div className="FeatureWork">
            <div className="c-feature">
              <img src={require('../assets/images/example-thumb-1.jpg')} alt="thumb"></img> 
             <p>Bitso: We relaunched the record subscription service Vinyl Me, Please. </p>
            </div>
            <div className="c-feature">
            <img src={require('../assets/images/example-thumb-2.jpg')} alt="thumb"></img> 
                <p>500 startups: We revisited Red Bull’s biggest musical moments of 2016.</p>
            </div>
            <div className="c-feature">
            <img src={require('../assets/images/example-thumb-3.jpg')} alt="thumb"></img> 
                <p>Citibanamex: We helped Ableton introduce their latest products and tell better stories.</p>
            </div>
            <div className="c-feature">
            <img src={require('../assets/images/example-thumb-4.jpg')} alt="thumb"></img> 
               <p>Otro más perrissssss..</p>
            </div>
        </div>
    </div>
  )