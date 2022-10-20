import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CarroCompras.module.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import toast, { Toaster } from 'react-hot-toast';
import { updateCarrito, getCarrito } from "../../redux/actions/UsersAction";


function CarroCompras({cartItems, setCartItems, onAddCarrito, onRemoveCarrito, onRemoveItemCarrito}) {
  const dispatch = useDispatch();
  const { logueado, setlogueado } = useContext(UserContext);

  if(logueado !== 'invitado' && logueado.carrito) {

    dispatch(updateCarrito(logueado.id, cartItems))
  }

  
  let total = cartItems.reduce((a, c) => a + c.price * c.cantidad, 0);
  let descripcion = "";
  let productos = [];
  let count = 0;
  return (
    <div className={styles.carroContainer}>
      {cartItems.length === 0 && <div>Su carrito de compras está vacío</div>}

      {cartItems.map((item) => (
        
        <div key={item.id} className={styles.itemsContainer}>
          <div hidden>
            {(count = count + 1)}
            {(descripcion = descripcion + item.cantidad + "x " + item.name)}
            {productos.push(item.id)}
          </div>
          <div className={styles.imgNameContainer}>
            <div className={styles.leftSideContainer}>
              <div>
                <img style={{height:'270px'}} src={item.image} alt="" />
              </div>
              <button onClick={() => onRemoveItemCarrito(item)}>
                Eliminar
              </button>
            </div>

            <div className={styles.flexDataContainer}>
              <p>{item.name}</p>
              <div className={styles.addRemoveItems}>
                <button onClick={() => onRemoveCarrito(item)}>-</button>
                {/* ///////ELIMINAR UN ITEM AL CARRITO */}
                <span>{item.cantidad}</span>
                {/* <button onClick={() => onAddCarrito(item)}>+</button>{" "} */}
                {
                  item.stock <= 1 ? (
                  <>
                  <button onClick={() => onAddCarrito(item) }  disabled={true}>+</button>
                  <p style={{fontSize:'15px'}}>La cantidad pedida no está disponible</p>
                  </>) : (<button onClick={() => onAddCarrito(item)} disabled={false}>+</button>)
                }
                {/* ///////AGREGAR UN ITEM AL CARRITO */}
              </div>
              <p>
                {item.cantidad} x $ {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}

      {total > 0 && logueado !== "invitado" ? (
        <>
          <h3>Total: $ {total.toFixed(2)}</h3>
          <Link className={styles.button} to="/checkout">
            <button>PAGAR</button>
          </Link>
        </>
      ) : total > 0 && logueado === "invitado" ? (
        <h3>Debes iniciar sesión para comprar.</h3>
      ) : (
        <h3>Su carrito está vacío</h3>
      )}
      <Toaster
      position="bottom-left"
      reverseOrder={false}
       />
    </div>
  );
}

export default CarroCompras;
