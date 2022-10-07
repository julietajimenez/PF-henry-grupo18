import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getAllUsers,
  verifyRoute,
  verifyUser,
} from "../../redux/actions/UsersAction";
import swal from "sweetalert2";

export default function Verify() {
  const dispatch = useDispatch();
  const { id } = useParams();

  function handleClick() {
    dispatch(verifyUser(id));
    swal.fire({
      icon: "success",
      text: '¡Cuenta verificada!',
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
