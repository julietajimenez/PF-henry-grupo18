import React from "react";
import styles from "./CarroCompras.module.css";

function CarroCompras(props) {
  const { cartItems, onAddCarrito, onRemoveCarrito, onRemoveItemCarrito } =
    props;

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
                eliminar
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
    </div>
  );
}

export default CarroCompras;
