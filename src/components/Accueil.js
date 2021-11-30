import Menu from './Menu';
import image_1 from '../assets/audi-hero.jpg';
import image_2 from '../assets/peugeot-intro.jpg';
import image_3 from '../assets/audi-intro.jpeg';
import image_4 from '../assets/mercedes-intro.jpg';

import Hero from '../components/Hero';
import Slider from '../components/Slider';


function Accueil() {
  return (
    <div className="App">
      <Menu></Menu>
      <Hero imageSrc={image_1}></Hero>
      <Slider imageSrc={image_2} titre={"Peugeot"} sous_titre={""}></Slider>
      <Slider imageSrc={image_3} titre={"Audi"} sous_titre={""} flipped={true}></Slider>
      <Slider imageSrc={image_4} titre={"Mercedes"} sous_titre={""}></Slider>
      
      
    </div>
  );
}

export default Accueil;
