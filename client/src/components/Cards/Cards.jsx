import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import styles from "./Cards.module.css";
import imgDefault from './imageDefault.jpg';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { addFavorite, deleteFavorites, getFavorites } from "../../redux/actions/ProductsActions";
import swal from "sweetalert2";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import UserContext from "../../context/userContext";
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
  const { logueado, setlogueado } = React.useContext(UserContext);
  const [user, setUser] = useState(false)
  const [favorite, setFavorite] = useState(false)
  /*   const obj = {
    idUser: logueado.email,
    idProduct: producto.id
  } */
  
 // useEffect(() => {
    //dispatch(getFavorites(logueado.email))
 //   if (Object.keys(logueado).length !== 0) {
 //     setUser(true)
      
 //   }
 //   if (Object.keys(logueado).length === 0) return setUser(false) 
 // }, [dispatch])
/*   
  const fav = useSelector(state=> state.products.favorite)
  fav.map(e=>{
    if(e.id === producto.id){
      setFavorite(true)
    } 
  }) */
  function handleFavorite() {
    if (favorite == false) {
      if (logueado !== 'invitado') {
        console.log('esta logueado')
        dispatch(addFavorite(logueado.email, producto.id))
        notifyAddFav()
        setFavorite(true)
      } else {
        console.log('NOO esta logueado')
        
       swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para añadir favoritos',
      })}
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