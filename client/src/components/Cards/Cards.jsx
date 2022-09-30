import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cards.module.css";

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
    </div>
  );
};
export default Cards;
