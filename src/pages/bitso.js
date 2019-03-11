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
            <div className="p-UseCase">
            <img src={require('../assets/images/example-thumb-2.jpg')} alt="thumb"></img> 
            <p>Our role</p>
            <ul>
                <li>Interaction Design</li>
                <li>Product Management</li>
                <li>Visual Design</li>
            </ul>
            <p>The ambition was to create a unique, ownable brand that would work within Spotify’s design system and UX – and way beyond!</p>
            </div>
        </div>
    </div>
  ) 