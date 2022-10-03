import React from "react";
<<<<<<< HEAD
import styles from "./CarroCompras.module.css";
=======
import Checkout from "../PayPal/Checkout";
>>>>>>> 7ef66a54fdf7e9e7cb13f24d34032f25305cabe9

function CarroCompras(props) {
  const { cartItems, onAddCarrito, onRemoveCarrito, onRemoveItemCarrito } =
    props;

<<<<<<< HEAD
  const total = cartItems.reduce((a, c) => a + c.price * c.cantidad, 0);
  return (
    <div className={styles.carroContainer}>
      {cartItems.length === 0 && <div>Su carrito de compras está vacío</div>}

      {cartItems.map((item) => (
        <div key={item.id} className={styles.itemsContainer}>
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
      <h3>Total: $ {total.toFixed(2)}</h3>
=======
  let total = cartItems.reduce((a, c) => a + c.price * c.cantidad, 0);
  let descripcion = "";
  let count = 0;
  return (
    <div>
      <h2>Mi carrito</h2>

      <div>
        <h2>Total: $ {total}</h2>
      </div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div hidden>
            {(count = count + 1)}
            {(descripcion = descripcion + item.cantidad + "x " + item.name)}
          </div>
          <div>{item.name}</div>
          <img src={item.image} alt="" />
          <div>
            
            <button onClick={() => onAddCarrito(item)}>+</button>
            <button onClick={() => onRemoveCarrito(item)}>-</button>
            <button onClick={() => onRemoveItemCarrito(item)}>eliminar</button>
          </div>
          <div>
            {item.cantidad} x $ {item.price}
          </div>
        </div>
      ))}
      {total > 0 ? (
        <Checkout valor={total} descripcion={descripcion} />
      ) : (
        <h1>Su carrito está vacío</h1>
      )}
>>>>>>> 7ef66a54fdf7e9e7cb13f24d34032f25305cabe9
    </div>
  );
}

export default CarroCompras;
