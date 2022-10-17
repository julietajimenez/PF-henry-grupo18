import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import formula from "./formula-carrusel.webp";
import maybelline from "./maybelline-carrusel.jpg";
import revlon from "./revlon-carrusel.png";
import style from "./carrusel.module.css";
import { Link } from "react-router-dom";

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Link to={`/products/brands/${"revlon"}`}>
              <img
                className={`d-block w-100 ${style.img} `}
                src={revlon}
                alt="First slide"
              />
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`/products/brands/${"maybelline"}`}>
              <img
                className={`d-block w-100 ${style.img} `}
                src={maybelline}
                alt="Second slide"
              />
            </Link>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`/products/brands/${"physiciansFormula"}`}>
              <img
                className={`d-block w-100 ${style.img} `}
                src={formula}
                alt="Third slide"
              />
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
