import React from "react";
import styles from "./CarroCompras.module.css";
import Checkout from "../PayPal/Checkout";

function CarroCompras(props) {
  const { cartItems, onAddCarrito, onRemoveCarrito, onRemoveItemCarrito } =
    props;

  let total = cartItems.reduce((a, c) => a + c.price * c.cantidad, 0);
  let descripcion = "";
  let count = 0;
  return (
    <div className={styles.carroContainer}>
      {cartItems.length === 0 && <div>Su carrito de compras está vacío</div>}

      {cartItems.map((item) => (
        <div key={item.id} className={styles.itemsContainer}>
          <div hidden>
            {(count = count + 1)}
            {(descripcion = descripcion + item.cantidad + "x " + item.name)}
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

      {total > 0 ? (
        <>
        <Checkout valor={total.toFixed(2)} descripcion={descripcion} />
        <h3>Total: $ {total.toFixed(2)}</h3>
        </>
      ) : (
        <h3>Su carrito está vacío</h3>
      )}
    </div>
  );
}

export default CarroCompras;

