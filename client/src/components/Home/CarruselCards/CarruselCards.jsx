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
    <div >


    {/* <h2>MEJORES PUNTUADOS</h2>
    <div >
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item style={{display: 'flex'}}>
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
                key={'625fa7bc-6fde-442f-ade8-e2cc92e66d7e'}
                  id={'625fa7bc-6fde-442f-ade8-e2cc92e66d7e'}
                  name={"Revlon ColorStay Eye Liner"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/f8d347e5c094ab100de0f04bc163eb79_ra,w158,h184_pa,w158,h184.jpeg'}
                  price={11.49}
                  category={'eyeliner'}
                  stock={115}
                  onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'c4d9d9e5-e906-464c-81c9-349782fffbab'}
                  id={'c4d9d9e5-e906-464c-81c9-349782fffbab'}
                  name={"e.l.f. Studio Blush Palette Light"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/9afdb02a47f0a04fe1f7aa78c5a49f63_ra,w158,h184_pa,w158,h184.jpg'}
                  price={9.99}
                  category={'blush'}
                  stock={100}
                  onAddCarrito={onAddCarrito}
                />
                
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item  style={{display: 'flex'}}>
         <Cards
                key={'8c99d0ab-37fd-4efa-9213-85a3673458d3'}
                id={'8c99d0ab-37fd-4efa-9213-85a3673458d3'}
                name={"Almay Intense i-Color Liquid Shadow + Color Primer"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/757cf4197fe84ed9c1e2c21ed63d1be3_ra,w158,h184_pa,w158,h184.jpeg'}
                price={10.99}
                category={'eyeshadow'}
                stock={110}
                onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'eb37b200-b5bc-4fb9-8e52-3b607bd84b50'}
                id={'eb37b200-b5bc-4fb9-8e52-3b607bd84b50'}
                name={"Almay Truly Lasting Color Makeup"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/f080c72085d7746687375cdcfdf62a94_ra,w158,h184_pa,w158,h184.jpeg'}
                price={17.29}
                category={'foundation'}
                stock={173}
                onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'047929e6-8f73-45a8-b286-3d666db836ca'}
                id={'047929e6-8f73-45a8-b286-3d666db836ca'}
                name={"Revlon PhotoReady Primer, Shadow + Sparkle Palette"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/b35505ef545ea7e478d0da882d8e93d8_ra,w158,h184_pa,w158,h184.jpeg'}
                price={14.49}
                category={'eyeshadow'}
                stock={145}
                onAddCarrito={onAddCarrito}
                />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{display: 'flex'}}>
      <Cards
                key={'88917263-9b69-43e2-ad5b-d40e2aa5f8d3'}
                id={'88917263-9b69-43e2-ad5b-d40e2aa5f8d3'}
                name={"Physicians Formula Eye Booster Instant Lash Extension Kit in Ultra Black"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/16ace93b48cdc67bb76c81eaec10ff45_ra,w158,h184_pa,w158,h184.jpg'}
                price={19.99}
                category={'mascara'}
                stock={200}
                onAddCarrito={onAddCarrito}
                />
      <Cards
                key={'05340eb6-a63b-4f4b-a9be-d10dad380fea'}
                id={'05340eb6-a63b-4f4b-a9be-d10dad380fea'}
                name={"Almay Smart Shade Skintone Matching Makeup "}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/afcbd92c05ea8b6452eabc80e2b9d549_ra,w158,h184_pa,w158,h184.jpeg'}
                price={17.29}
                category={'foundation'}
                stock={173}
                onAddCarrito={onAddCarrito}
                />
      <Cards
                key={'f908029f-2657-40b1-a9bf-a109f5457603'}
                id={'f908029f-2657-40b1-a9bf-a109f5457603'}
                name={"Physicians Formula Shimmer Strips Kohl Kajal Eyeliner Trio"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/98c26c4923f92c11e36f7dbc28e800a9_ra,w158,h184_pa,w158,h184.jpeg'}
                price={14.79}
                category={'eyeliner'}
                stock={148}
                onAddCarrito={onAddCarrito}
                />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div> */}
     <h2 style={{marginTop: '1rem', marginBottom:' 1rem'}}>MEJORES PUNTUADOS</h2>
     <div style={{display: 'flex', gap:'1rem', marginLeft: '1rem', marginBottom:' 2rem'}}>
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
                key={'625fa7bc-6fde-442f-ade8-e2cc92e66d7e'}
                  id={'625fa7bc-6fde-442f-ade8-e2cc92e66d7e'}
                  name={"Revlon ColorStay Eye Liner"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/f8d347e5c094ab100de0f04bc163eb79_ra,w158,h184_pa,w158,h184.jpeg'}
                  price={11.49}
                  category={'eyeliner'}
                  stock={115}
                  onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'c4d9d9e5-e906-464c-81c9-349782fffbab'}
                  id={'c4d9d9e5-e906-464c-81c9-349782fffbab'}
                  name={"e.l.f. Studio Blush Palette Light"}
                  image={'https://d3t32hsnjxo7q6.cloudfront.net/i/9afdb02a47f0a04fe1f7aa78c5a49f63_ra,w158,h184_pa,w158,h184.jpg'}
                  price={9.99}
                  category={'blush'}
                  stock={100}
                  onAddCarrito={onAddCarrito}
                />
                 <Cards
                key={'8c99d0ab-37fd-4efa-9213-85a3673458d3'}
                id={'8c99d0ab-37fd-4efa-9213-85a3673458d3'}
                name={"Almay Intense i-Color Liquid Shadow + Color Primer"}
                image={'https://d3t32hsnjxo7q6.cloudfront.net/i/757cf4197fe84ed9c1e2c21ed63d1be3_ra,w158,h184_pa,w158,h184.jpeg'}
                price={10.99}
                category={'eyeshadow'}
                stock={110}
                onAddCarrito={onAddCarrito}
                />
                <Cards
                key={'eb37b200-b5bc-4fb9-8e52-3b607bd84b50'}
                id={'eb37b200-b5bc-4fb9-8e52-3b607bd84b50'}
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