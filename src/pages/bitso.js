import React from "react"
import Header from "../components/header"

export default () => (
    <div className="Wrapper-Worklist">
    <Header/> 
        <div className="FeatureProject">
            <div className="p-feature">
              <h2>Introducing an easy way to buy and sell criptocurrencies.</h2>
              <img src={require('../assets/images/bitso-hero.png')} alt="thumb"></img>
              <p>Bitso, the first and leading cryptocurrency exchange platform in Mexico and Latin America, has around 500K users more than 60% of the national market. The company started operations in April of 2014 with the mission of reinventing financial services in Mexico.</p> 
            </div>
            <div className="UseCase-left">
                <div className="UseCase-image-left">                            
                    <img src={require('../assets/images/bitso-exp.jpg')} alt="thumb"></img>          
                </div>
                <div className="UseCase-item-left">
                <p>In 2017, How to buy Bitcoin ranked third in global trends.</p> 
                <p>With the mission to democratize financial services and give access to crypto, Bitso had the challenge to attract new users, especially those who are not experts in the topic. 
To achieve this, we use mobile apps to simplifying crypto buy in four steps </p> 
                </div>  
            </div>
            <div className="UseCase-right">
                <div className="UseCase-item-right">
                <p>By working together, Bitso increased their innovation capabilities. We empowered the team with strategists, designers, and other specialists to launch iOS and Android apps in record time.</p> 
                <p>We demonstrate how an external and internal team can work all in all to understand people, their motivations, needs, and fears.</p> 
                </div>
                <div className="UseCase-image-right">                            
                    <img src={require('../assets/images/bitso-team.jpg')} alt="thumb"></img>          
                </div> 
            </div>
            <div className="UseCase-left">
                <div className="UseCase-image-left">                            
                    <img src={require('../assets/images/example-thumb-7.gif')} alt="thumb"></img>          
                </div>
                <div className="UseCase-item-left">
                <p>This collaborative work led us to live a design process full of useful learnings for today and the future. <br></br>We questioned the existing mental models, we iterated thousands of times the user interface, we did findability and discoverability tests and we validated hypotheses with prototypes, all with the sole purpose of simplifying the crypto experience as much as possible.</p> 
                </div>  
            </div>
            <div className="UseCase-right">
                <div className="UseCase-item-right">
                <p>Together we managed to reduce the process to four steps:</p> 
                <p>The result impacted the KPIs and the perception of its users and non-users regarding the company.</p>
                </div>
                <div className="UseCase-image-right">                            
                    <img src={require('../assets/images/example-thumb-6.gif')} alt="thumb"></img>          
                </div> 
            </div>
            <div className="p-feature">
              <img src={require('../assets/images/bitso-collaboration.jpg')} alt="thumb"></img>
            </div>
            <div className="related-articles">
                <h3>Articles</h3>
                <p>Una búsqueda obsesiva por la máxima simplificación de cripto</p>
            </div> 
            <div className="Next">
                <p>Next Project →</p>
            </div>
        </div>
    </div>
  ) 