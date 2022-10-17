import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import styles from "./Cards.module.css";
import imgDefault from './imageDefault.jpg';
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { addFavorite, deleteFavorites } from "../../redux/actions/ProductsActions";
import swal from "sweetalert";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Cards = ({
  id,
  name,
  price,
  category,
  image,
  categories,
  stock,
  onAddCarrito,
  notifyAddFav,
  notifyRemove
}) => {
  let producto = { id, name, price, category, image, categories, stock };
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logueado = JSON.parse(localStorage.logueado);
  const [user, setUser] = useState(false)
  const [favorite, setFavorite] = useState(false)
  /*   const obj = {
      idUser: logueado.email,
      idProduct: producto.id
    } */

  useEffect(() => {
    if (Object.keys(logueado).length !== 0) {
      setUser(true)

    }
    if (Object.keys(logueado).length === 0) return setUser(false)
  }, [logueado,])

  function handleFavorite() {
    if (favorite == false) {
      if (logueado) {
        dispatch(addFavorite(logueado.email, producto.id))
        notifyAddFav()
        setFavorite(true)
      } else swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para añadir favoritos',
      })
    }

    if (favorite == true) {
      dispatch(deleteFavorites(logueado.email, producto.id))
      notifyRemove()
      setFavorite(false)
    }
  }
  /* const favId = favorites.map(e => e.id) */





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
      <div>
        {favorite ?
          <AiFillHeart onClick={handleFavorite} style={{ color: "#bf3030" }} />
          :
          <AiOutlineHeart onClick={handleFavorite} style={{ color: "#bf3030" }} />
        }

      </div>
    </div>
  );
};
export default Cards;

