import React, { useState, useEffect } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateUser } from "../../redux/actions/UsersAction";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import sentEmail from "./Firebase/sentEmail";
import {
  getAllProducts,
  stockUpdate,
} from "../../redux/actions/ProductsActions";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productos = useSelector((state) => state.products.products);
  const [productStock, setProductStock] = useState({
    stock: 0,
  });

  const usuarios = useSelector((state) => state.users.users);
  const logueado = JSON.parse(localStorage.logueado);
  const checkoutinfo = JSON.parse(localStorage.getItem("carrito"));
  let precio = checkoutinfo.map((e) => e);

  useEffect(() => {
    if (!productos.length) {
      dispatch(getAllProducts());
    }

    dispatch(getAllUsers());
  }, [dispatch, productos.length]);

  const updateStock = (id, cantidad, stockProducto) => {
    const newStock = parseInt(stockProducto) - parseInt(cantidad);
    setProductStock({
      stock: newStock,
    });
    dispatch(stockUpdate(id, newStock));
  };

  const valor = precio
    .map((e) => e.cantidad * e.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  let users = usuarios.find((user) => user.email === logueado.email);
  const [input, setInput] = useState({
    compras: users.compras,
  });

  const descripcion = precio.map((e) => e.name);

  function submitHandler() {
    let email = logueado.email; // ASIGNO EL VALOR DE CORREO SEGÚN LO ENVIADO POR INPUT
    let subject = "¡Gracias por tu compra en nuestra tienda!"; // LO MISMO
    let body = descripcion + " por un valor total de: $" + valor; // DE ARRIBA
    sentEmail(email, subject, body); // EJECUTO LA FUNCIÓN SENTEMAIL Y LE ENVÍO LOS DATOS POR PROPS... INVESTIGAR DE COMO INCORPORAR ESTO AL ATRIBUT ONAPPROVE DE PAYPAL
  }

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const REACT_APP_PAYPAL_CLIENT_ID =
    "ATbqit3pbxakLWH6-Sgyh_FIaRvtCBr-Vkq2AWChyWBBx4monf1Dumry1mGcdZiYLgxN4TvdaPGzKk6l";
  const handleApprove = (orderID) => {
    setPaidFor(true);
    swal(
      "¡Gracias por comprar en Cosmetista Henry",
      "Se envió un ticket de compra a su correo electrónico.😃"
    );
    setTimeout((navigate("/"), 5000));
  };

  if (error) {
    alert(error);
  }

  return (
    <div style={{ minHeight: "70vh" }}>
      <h1>¡Gracias por su compra!</h1>
      <div>
        Esto es lo que usted estará comprando:{" "}
        {precio.map((e) => (
          <li key={e.id}>{e.name + ": por " + "$" + e.price + " c/u"}</li>
        ))}
        Total será de: ${valor}
      </div>
      <PayPalScriptProvider
        options={{ "client-id": REACT_APP_PAYPAL_CLIENT_ID }}
      >
        <PayPalButtons
          onClick={(data, actions) => {
            const hasAlreadyBougthCourse = false;
            if (hasAlreadyBougthCourse) {
              setError("Ya compraste esto");
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
          style={{ layout: "vertical", color: "silver" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: `Compra en Henry Cosmetista`,
                  amount: {
                    value: valor, //ACÁ IRÍA EL PRECIO DEL CARRITO
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const set = new Set(precio);
            const order = await actions.order.capture();
            const productosComprados = [...set];
            let prodComp = productosComprados.map((item) => item.id);
            let prod = input.compras.concat(prodComp);
            let usuarioCompras = users;
            const prodSet = new Set(prod);
            usuarioCompras.compras = [...prodSet];
            dispatch(updateUser(users.id, usuarioCompras));
            submitHandler();
            handleApprove(data.orderID);
            
              precio.map((e) => {
                updateStock(e.id, e.cantidad, e.stock);
              });
            
            setInput({ ...input, compras: prodComp });
            localStorage.removeItem("carrito");
          }}
          onCancel={() => {}}
          onError={(err) => {
            setError(err);
          }}
        />
      </PayPalScriptProvider>
      <Link to="/carrito">Volver</Link>
    </div>
  );
}

export default Checkout;
