import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from '../../Cards/Cards';


export default function CarruselCards(props) {
  const [index, setIndex] = useState(0);
  const { onAddCarrito } = props;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{display:'flex', flexDirection: 'column' }}>


    <h2>MEJORES PUNTUADOS</h2>
    <div >
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Cards
                key={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                  id={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                  name={"L'Oreal Color Riche Extraordinaire Lip Color"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/739bc21253ce772c2b2e7ad40d9d3f44_ra,w158,h184_pa,w158,h184.jpeg'}
                  price={13.96}
                  category={'lipstick'}
                  stock={140}
                  onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                  id={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                  name={"L'Oreal Color Riche Extraordinaire Lip Color"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/739bc21253ce772c2b2e7ad40d9d3f44_ra,w158,h184_pa,w158,h184.jpeg'}
                  price={13.96}
                  category={'lipstick'}
                  stock={140}
                  onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                  id={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                  name={"L'Oreal Color Riche Extraordinaire Lip Color"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/739bc21253ce772c2b2e7ad40d9d3f44_ra,w158,h184_pa,w158,h184.jpeg'}
                  price={13.96}
                  category={'lipstick'}
                  stock={140}
                  onAddCarrito={onAddCarrito}
                />
                
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <Cards
                key={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                id={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                name={"L'Oreal Color Riche Extraordinaire Lip Color"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/739bc21253ce772c2b2e7ad40d9d3f44_ra,w158,h184_pa,w158,h184.jpeg'}
                price={13.96}
                category={'lipstick'}
                stock={140}
                onAddCarrito={onAddCarrito}
                />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Cards
                key={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                id={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                name={"L'Oreal Color Riche Extraordinaire Lip Color"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/739bc21253ce772c2b2e7ad40d9d3f44_ra,w158,h184_pa,w158,h184.jpeg'}
                price={13.96}
                category={'lipstick'}
                stock={140}
                onAddCarrito={onAddCarrito}
                />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}