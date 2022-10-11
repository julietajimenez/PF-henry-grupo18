import React, { useState, useContext, useEffect } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector} from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import sentEmail from "./Firebase/sentEmail";

import UserContext from "../../context/userContext";
import { getAllUsers, updateUser } from "../../redux/actions/UsersAction";

function Checkout({ descripcion, valor, cantidad, productos }) {

  const {logueado, setlogueado} = useContext(UserContext)
  

  const dispatch = useDispatch()
  
  const usuarios = useSelector((state) => state.users.allUsers);
  useEffect(() => {
    
    dispatch(getAllUsers())

  }, [dispatch])


  function submitHandler() {
   
    let email = logueado.email; // ASIGNO EL VALOR DE CORREO SEGÚN LO ENVIADO POR INPUT
    let subject = "¡Gracias por tu compra en nuestra tienda!"; // LO MISMO
    let body = descripcion; // DE ARRIBA
    sentEmail(email, subject, body); // EJECUTO LA FUNCIÓN SENTEMAIL Y LE ENVÍO LOS DATOS POR PROPS... INVESTIGAR DE COMO INCORPORAR ESTO AL ATRIBUT ONAPPROVE DE PAYPAL
  }


  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const compraste = descripcion;
  const REACT_APP_PAYPAL_CLIENT_ID =
    "ATbqit3pbxakLWH6-Sgyh_FIaRvtCBr-Vkq2AWChyWBBx4monf1Dumry1mGcdZiYLgxN4TvdaPGzKk6l";
  const handleApprove = (orderID) => {
    setPaidFor(true);
    swal('¡Gracias por comprar en Cosmetista Henry', `Aquí sus productos comprados: ${descripcion}`)
  };


  if (error) {
    alert(error);
  }

  let users = usuarios.find(user => user.id === logueado.id)
  console.log(users)
  const [input, setInput] = useState({
    compras: users.compras
  })

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
                description: `gracias nene`,
                amount: {
                  value: valor, //ACÁ IRÍA EL PRECIO DEL CARRITO
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {

          const set = new Set(productos)
          const productosComprados = [...set];
          let prodComp = productosComprados.map(item => item)
          let prod = input.compras.concat(prodComp)
          let usuarioCompras = users
          usuarioCompras.compras = prod

          
          dispatch(updateUser(users.id, usuarioCompras))
          setlogueado(usuarioCompras)
          const order = await actions.order.capture();
          submitHandler()
          // console.log(descripcion)
          handleApprove(data.orderID);
          setInput({...input, compras: prod})
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
