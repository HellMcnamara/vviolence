import React from "react"
import Header from "../components/header";

export default () => (
    <div className="Wrapper Welcome">
    <Header/>
    <div className="Home">
    <p> <span role="img" aria-label="Sanduche">🥪</span> </p>
      <h1>Hey, I’m Jay!</h1>
        <p> a Colombian designerd based in Mexico City.</p>
        <div className="Social">
            <a href="https://www.linkedin.com/in/hellmcnamara/" target="_blank" rel="noopener noreferrer">Linkedin</a> -
            <a href="https://twitter.com/Noyonosoyesa" target="_blank" rel="noopener noreferrer">Twitter</a> -
            <a href="https://dribbble.com/hellmcnamara" target="_blank" rel="noopener noreferrer">Dribbble</a> - 
            <a href="https://www.instagram.com/noyonosoyesa/" target="_blank" rel="noopener noreferrer">Instagram</a> 
        </div>
    </div>
    </div>
  )