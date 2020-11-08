import React from "react";
import "../styles/styles.scss";
import Carousel from "react-bootstrap/Carousel";

const CarouselProduct = props => {
    return (
        <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block caroulsel-products"
            src="https://www.build-review.com/wp-content/uploads/2019/12/A-guide-to-construction-safety-for-homebuilders.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block caroulsel-products"
            src="https://www.build-review.com/wp-content/uploads/2019/12/A-guide-to-construction-safety-for-homebuilders.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block caroulsel-products"
            src="https://www.build-review.com/wp-content/uploads/2019/12/A-guide-to-construction-safety-for-homebuilders.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
      );
    };

export default CarouselProduct;
