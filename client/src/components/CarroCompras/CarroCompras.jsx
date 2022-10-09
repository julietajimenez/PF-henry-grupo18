import React, { useContext } from "react";
import styles from "./CarroCompras.module.css";
import Checkout from "../PayPal/Checkout";

import UserContext from "../../context/userContext";

function CarroCompras(props) {

  const {logueado, setlogueado} = useContext(UserContext)
  const { cartItems, onAddCarrito, onRemoveCarrito, onRemoveItemCarrito } =
    props;

  let total = cartItems.reduce((a, c) => a + c.price * c.cantidad, 0);
  let descripcion = "";
  let productos = []
  let count = 0;
  return (
    <div className={styles.carroContainer}>
      {cartItems.length === 0 && <div>Su carrito de compras está vacío</div>}

      {cartItems.map((item) => (
        <div key={item.id} className={styles.itemsContainer}>
          <div hidden>
            {(count = count + 1)}
            {(descripcion = descripcion + item.cantidad + "x " + item.name)}
            {(productos.push(item.id))}
            
          </div>
          <div className={styles.imgNameContainer}>
            <div className={styles.leftSideContainer}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <button onClick={() => onRemoveItemCarrito(item)}>
                Eliminar
              </button>
            </div>

            <div className={styles.flexDataContainer}>
              <p>{item.name}</p>
              <div className={styles.addRemoveItems}>
                <button onClick={() => onRemoveCarrito(item)}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => onAddCarrito(item)}>+</button>
              </div>
              <p>
                {item.cantidad} x $ {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}

      {logueado.email && total > 0 ? (
        <>
        <Checkout valor={total} descripcion={descripcion} productos={productos} />
        <h3>Total: $ {total.toFixed(2)}</h3>
        </>
      ) : ( total = 0 ?
        <h3>Su carrito está vacío</h3>
        : <h3>Iniciar sesion</h3>
      )}
    </div>
  );
}

export default CarroCompras;

