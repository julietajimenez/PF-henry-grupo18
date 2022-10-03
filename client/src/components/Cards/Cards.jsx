import React from "react";
<<<<<<< HEAD
import {useNavigate} from 'react-router-dom';
import styles from "./Cards.module.css";
import imgDefault from './imageDefault.jpg'
=======
import { Link, useNavigate } from "react-router-dom";
import "./Cards.module.css";
>>>>>>> 7ef66a54fdf7e9e7cb13f24d34032f25305cabe9

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
<<<<<<< HEAD
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
=======

  const navigate = useNavigate()

  return (
   
    <div
      key={id}
      style={{
        margin: "10px",
        paddingTop: "0px",
        maxWidth: "320px",
        background: "gray",
        borderRadius: "10px",
        height: "400px",
      }}
    >
      <img
        style={{
          maxHeight: "200px",
          width: "320px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
        src={image}
        alt="nohayimagen"
      />
      <p style={{}}>{name}</p>
      <span>${price} USD</span>
      <p>{category}</p>
      {stock < 1 ? <span>Sin stock</span> : null}
      <button onClick={() => onAddCarrito(producto)}>Agregar al carrito</button>
      <button onClick={() => navigate(`/products/${id}`)}>Detalle</button>
>>>>>>> 7ef66a54fdf7e9e7cb13f24d34032f25305cabe9
    </div>
  );
};
export default Cards;
