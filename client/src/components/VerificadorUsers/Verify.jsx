import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../../redux/actions/UsersAction";
import swal from "sweetalert2";
import style from '../PayPal/Checkout.module.css'

export default function Verify() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate()

  function handleClick() {
    dispatch(verifyUser(id));
    swal.fire({
      icon: "success",
      title: "¡Cuenta verificada!",
      text: 'Vuelva a loguearse para completar la verificación'
    });
    setTimeout(() => {
      navigate('/login')
    }, 2000);
  }

  return (
    <div  style={{minHeight:'80vh'}}>
      <div className={style.card}>
        <h2>¡Bienvenido a Pure Glow!</h2>
        <p>Para activar su cuenta, clickee en el botón de confirmar.</p>
      <button onClick={handleClick} className={style.button} style={{ backgroundColor: '#73A806', color: 'white'}}>CONFIRMAR</button>
      <p>Si recibió este correo por error, ignore este mensaje.</p>
      </div>

    </div>
  );
}
