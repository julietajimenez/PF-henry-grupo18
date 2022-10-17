import React from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyUser } from "../../redux/actions/UsersAction";
import swal from "sweetalert2";

export default function Verify() {
  const dispatch = useDispatch();
  const { id } = useParams();

  function handleClick() {
    dispatch(verifyUser(id));
    swal.fire({
      icon: "success",
      text: "¡Cuenta verificada!",
    });
  }

  return (
    <>
      <div>
        <h2>¡Bienvenido a Pure Glow!</h2>
        <p>Para activar su cuenta, clickee en el botón de confirmar.</p>
      </div>

      <button onClick={handleClick}>CONFIRMAR</button>
      <p>Si recibió este correo por error, ignore este mensaje.</p>
    </>
  );
}
