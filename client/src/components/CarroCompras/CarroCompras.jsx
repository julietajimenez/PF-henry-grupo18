import React, { useEffect, useState } from "react";
import styles from "./CarroCompras.module.css";
import Checkout from "../PayPal/Checkout";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function CarroCompras(props) {
  const { logueado, setlogueado } = useContext(UserContext);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const prodEnLocalStorage = localStorage.getItem("carrito");
      return prodEnLocalStorage ? JSON.parse(prodEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAddCarrito = (product) => {
    console.log(product);
    const productAdd = cartItems.find((item) => item.id === product.id);
    if (productAdd) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productAdd, cantidad: productAdd.cantidad + 1 }
            : item
        )
      );
      total += product.price;
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
      total += product.price;
      Swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "El producto ha sido añadido al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onRemoveCarrito = (product) => {
    const productRemove = cartItems.find((item) => item.id === product.id);
    if (productRemove.cantidad !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productRemove, cantidad: productRemove.cantidad - 1 }
            : item
        )
      );
    }
  };
  const onRemoveItemCarrito = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

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
                {/* ///////ELIMINAR UN ITEM AL CARRITO */}
                <span>{item.cantidad}</span>
                <button onClick={() => onAddCarrito(item)}>+</button>{" "}
                {/* ///////AGREGAR UN ITEM AL CARRITO */}
              </div>
              <p>
                {item.cantidad} x $ {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}

      {total > 0 && logueado != "invitado" ? (
        <>
          <Link to="/checkout">
            <button>PAGAR</button>
          </Link>
          <h3>Total: $ {total.toFixed(2)}</h3>
        </>
      ) : total > 0 && logueado === "invitado" ? (
        <h3>Debes iniciar sesión para comprar.</h3>
      ) : (
        <h3>Su carrito está vacío</h3>
      )}
    </div>
  );
}

export default CarroCompras;
