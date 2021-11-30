import React from 'react';
import "./Slider.css";
import { useInView } from 'react-intersection-observer';
import Button from 'react-bootstrap/Button';
import Modeles from './Modeles';

function Slider({ imageSrc, titre, sous_titre, flipped }) {

    const { ref, inView } = useInView({
        /* Optional options*/ 
        threshold: 0.4,
    });
    const renderContent = () => {
        if (!flipped) {
            return (
                <>
                    <img src={imageSrc} alt="peugot 308 calandre " className="slider__image"></img>
                    <div className="slider__content">
                        <h1 className="slider__titre">{titre}</h1>
                        <p>{sous_titre}</p>
                        <Button variant="light" path="/modeles"></Button> <Button variant="dark">En savoir plus</Button>{Modeles}

                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="slider__content">
                        <h1 className="slider__titre">{titre}</h1>
                        <p>{sous_titre}</p>
                        <Button variant="light"></Button> <Button variant="dark">En savoir plus</Button>{Modeles}
                    </div>
                    <img src={imageSrc} alt="audi calandre " className="slider__image"></img>
                </>
            );
        }


    };
    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
          {renderContent()}
        </div>
      );
    };

export default Slider;
