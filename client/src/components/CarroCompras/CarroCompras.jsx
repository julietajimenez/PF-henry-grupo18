import React from "react";
import Checkout from "../PayPal/Checkout";

function CarroCompras(props) {
  const { cartItems, onAddCarrito, onRemoveCarrito, onRemoveItemCarrito } =
    props;

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
    </div>
  );
}

export default CarroCompras;
