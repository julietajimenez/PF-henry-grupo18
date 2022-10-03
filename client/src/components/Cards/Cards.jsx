import React from "react";
import {useNavigate} from 'react-router-dom'
import styles from "./Cards.module.css";

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
        <img src={image} alt="nohayimagen" />
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
