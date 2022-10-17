import React, { useState } from 'react';
import Cards from '../../Cards/Cards';


export default function CarruselCards(props) {
  const { onAddCarrito } = props;

  

  return (
    <div >

     <h2 style={{marginTop: '1rem', marginBottom:' 1rem'}}>MEJORES PUNTUADOS</h2>
     <div style={{display: 'flex', gap:'1rem', marginLeft: '1rem', marginBottom:' 2rem'}}>
     <Cards
                key={'ab0f3caa-ef0c-4ef6-96c1-96d03e554825'}
                  id={'61862c95-f680-4f42-89f2-60c4abdeb491'}
                  name={"L'Oreal Color Riche Extraordinaire Lip Color"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/739bc21253ce772c2b2e7ad40d9d3f44_ra,w158,h184_pa,w158,h184.jpeg'}
                  price={13.96}
                  category={'lipstick'}
                  stock={140}
                  onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'625fa7bc-6fde-442f-ade8-e2cc92e66d7e'}
                  id={'3e0df5ec-db64-4c7f-beab-f90a92965791'}
                  name={"Revlon ColorStay Eye Liner"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/f8d347e5c094ab100de0f04bc163eb79_ra,w158,h184_pa,w158,h184.jpeg'}
                  price={11.49}
                  category={'eyeliner'}
                  stock={115}
                  onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'c4d9d9e5-e906-464c-81c9-349782fffbab'}
                  id={'aac9631b-846d-4ddf-ab23-dfa07ca782d7'}
                  name={"e.l.f. Studio Blush Palette Light"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/9afdb02a47f0a04fe1f7aa78c5a49f63_ra,w158,h184_pa,w158,h184.jpg'}
                  price={9.99}
                  category={'blush'}
                  stock={100}
                  onAddCarrito={onAddCarrito}
                />
                 <Cards
                key={'8c99d0ab-37fd-4efa-9213-85a3673458d3'}
                id={'4b311a47-a599-4040-b715-64e35d964584'}
                name={"Almay Intense i-Color Liquid Shadow + Color Primer"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/757cf4197fe84ed9c1e2c21ed63d1be3_ra,w158,h184_pa,w158,h184.jpeg'}
                price={10.99}
                category={'eyeshadow'}
                stock={110}
                onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'eb37b200-b5bc-4fb9-8e52-3b607bd84b50'}
                id={'86af4a94-8b3b-432a-a696-24131af0c375'}
                name={"Almay Truly Lasting Color Makeup"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/f080c72085d7746687375cdcfdf62a94_ra,w158,h184_pa,w158,h184.jpeg'}
                price={17.29}
                category={'foundation'}
                stock={173}
                onAddCarrito={onAddCarrito}
                />
     </div>
    </div>
  );
}