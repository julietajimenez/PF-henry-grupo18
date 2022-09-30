import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import formula from './formula-carrusel.webp';
import maybelline from './maybelline-carrusel.jpg'
import revlon from './revlon-carrusel.png';
import style from './carrusel.module.css'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.img} `}
          src={revlon}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.img} `}
          src={maybelline}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.img} `}
          src={formula}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

