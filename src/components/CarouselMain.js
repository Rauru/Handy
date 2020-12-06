import React from "react";
import "../styles/styles.scss";
import Carousel from "react-bootstrap/Carousel";
import HerramientasHandy from "../Herramientas Handy.png";
import TienesHerramientas from "../Tienes Herramientas.png";
import MisionHandy from "../Mision Handy.png"

const CarouselMain = props => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 caroulsel-products"
            src={HerramientasHandy}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Herramientas Handy</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TienesHerramientas}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tienes Herramientas</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={MisionHandy}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Mision Handy</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
