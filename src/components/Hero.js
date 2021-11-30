import React from 'react'
import "./hero.css"

const Hero = ({imageSrc}) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="voitures" className="hero__image"></img>
            <h1 className="hero__titre">Le meilleur des véhicules</h1>
        </div>
    )
}

export default Hero
