import React, { useState, useContext } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import sentEmail from "./Firebase/sentEmail";
import UserContext from "../../context/userContext";

function Checkout({ descripcion, valor, cantidad }) {
const {logueado, setlogueado} = useContext(UserContext); 

  function submitHandler() {
    let email = logueado.email; // ASIGNO EL VALOR DE CORREO SEGÚN LO ENVIADO POR INPUT
    let subject = "¡Gracias por tu compra en nuestra tienda!"; // LO MISMO
    let body = descripcion; // DE ARRIBA
    sentEmail(email, subject, body); // EJECUTO LA FUNCIÓN SENTEMAIL Y LE ENVÍO LOS DATOS POR PROPS... INVESTIGAR DE COMO INCORPORAR ESTO AL ATRIBUT ONAPPROVE DE PAYPAL
  }

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const compraste = descripcion;
  const REACT_APP_PAYPAL_CLIENT_ID =
    "ATbqit3pbxakLWH6-Sgyh_FIaRvtCBr-Vkq2AWChyWBBx4monf1Dumry1mGcdZiYLgxN4TvdaPGzKk6l";
  const handleApprove = (orderID) => {
    setPaidFor(true);
    swal(
      "¡Gracias por comprar en Cosmetista Henry",
      "Se envió un ticket de compra a su correo electrónico.😃"
    );
  };

  if (error) {
    alert(error);
  }
  return (
    <PayPalScriptProvider options={{ "client-id": REACT_APP_PAYPAL_CLIENT_ID }}>
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
        style={{ layout: "horizontal", color: "silver" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `Compra en Henry Cosmetista, productos de maquillaje de primera calidad.`,
                amount: {
                  value: valor, //ACÁ IRÍA EL PRECIO DEL CARRITO
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          submitHandler();
          handleApprove(data.orderID);
        }}
        onCancel={() => {}}
        onError={(err) => {
          setError(err);
          console.log("Error en el checkout", err);
        }}
      />
    </PayPalScriptProvider>
  );
}

export default Checkout;
