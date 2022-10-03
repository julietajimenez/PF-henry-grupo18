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
<<<<<<< HEAD
            <div><h2>Total: $ {total.toFixed(2)}</h2></div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <img src={item.image} alt="" />
                    <div>
                        <button onClick={() =>onAddCarrito(item)}>+</button>
                        <button onClick={() =>onRemoveCarrito(item)}>-</button>
=======
>>>>>>> 5af0d050fa34a18c3ce5b9dd9710b8ec516fa906

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
      <h3>Total: $ {total}</h3>
    </div>
  );
}

export default CarroCompras;
