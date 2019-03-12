import React from "react"
import Header from "../components/header"

export default () => (
    <div className="Wrapper-Worklist">
    <Header/> 
        <div className="FeatureProject">
            <div className="p-feature">
              <h2>We helped Bitso introduce an easy way to buy and sell criptocurrencies.</h2>
              <img src={require('../assets/images/example-thumb-1.jpg')} alt="thumb"></img>
              <p>Playlists are the new albums – the predominant format in pop music. Spotify is at the vanguard of this transformation, building entire scenes and genres around their human-curated lists.</p> 
            </div>
            <div className="UseCase-left">
                <div className="UseCase-image-left">                            
                    <img src={require('../assets/images/example-thumb-2.jpg')} alt="thumb"></img>          
                </div>
                <div className="UseCase-item-left">
                <p>To fuel their recent strategic pivot from b2c to b2b, we redesigned their brand and website. Our role:</p>
                    <ul>
                        <li>Interaction Design</li>
                        <li>Product Management</li>
                        <li>Visual Design</li>
                    </ul>   
                </div>  
            </div>
            <div className="UseCase-right">
                <div className="UseCase-item-right">
                <p>We continue to refine and grow the service against its core proposition of highlighting under-appreciated talent and providing cultural context to a dedicated audience of music lovers.</p>  
                </div>
                <div className="UseCase-image-right">                            
                    <img src={require('../assets/images/example-thumb-4.jpg')} alt="thumb"></img>          
                </div> 
            </div>
        </div>
    </div>
  ) 