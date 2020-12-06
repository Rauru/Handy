import React from "react";
import "../styles/styles.scss";
import Carousel from "react-bootstrap/Carousel";

const CarouselCheckOut = props => {
    return (
        <div>
      <Carousel className="caroulsel-checkout">
        <Carousel.Item>
          <img
            className="d-block caroulsel-products"
            src="https://lacalculadora.top/wp-content/uploads/2020/02/Voyage200.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block caroulsel-products"
            src="https://http2.mlstatic.com/calculadora-cientifica-ti-voyage-200-D_NQ_NP_957958-MEC43991094350_112020-F.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
      );
    };

export default CarouselCheckOut;
