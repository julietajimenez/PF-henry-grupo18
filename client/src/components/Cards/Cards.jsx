import React from "react";
import {useNavigate} from 'react-router-dom';
import styles from "./Cards.module.css";
import imgDefault from './imageDefault.jpg'

const Cards = ({
  id,
  name,
  price,
  category,
  image,
  categories,
  stock,
  onAddCarrito,
}) => {
  let producto = { id, name, price, category, image, categories };
  const navigate = useNavigate()

  return (
    <div key={id} className={styles.card}>
      <div className={styles.imgContainer}>
        { image? <img src={image} alt="nohayimagen" /> : <img style={{height:'270px'}} src={imgDefault}/>}
      </div>

      <p style={{}}>{name}</p>
      <span>${price} USD</span>
      <p>{category.toUpperCase()}</p>
      {stock < 1 ? <span>Sin stock</span> : null}
      <button onClick={() => onAddCarrito(producto)}>Agregar al carrito</button>
      <br></br>
      <button onClick={()=>navigate(`/products/${id}`)}>Ver más</button>
    </div>
  );
};
export default Cards;
