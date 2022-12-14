import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import styles from "./Register.module.css";
import UserContext from "../../context/userContext";
import Swal from "sweetalert2";

function Register() {

  const [errors, setErrors] = useState({});
  const [shown, setShown] = useState(false);
  const switchShown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShown(!shown)
  }

  const [input, setInput] = useState({
    name: "",
    email: "",
//    avatar: "",
    password: "",
    confirmPassword: "",
  });

  const [mensaje, setMensaje] = useState();
  const { logueado, setlogueado } = useContext(UserContext);


  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const validate = () => {
    let errors = {};
    if (!input.name) {
      errors.name = "Se requiere un nombre!";
    }
    if (!input.email) {
      errors.email = "Se requiere un mail!";
    }
    if (!input.password) {
      errors.password = "Se requiere una contraseña!";
    }
    if (input.confirmPassword !== input.password) {
      errors.confirmPassword = "Sus contraseñas deben ser iguales.";
    }
    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const Usuario = {
      name: input.name,
      email: input.email,
//      avatar: input.avatar,
      password: input.password,
      confirmPassword: input.confirmPassword,
    };

    if (input.name !== "" && input.email !== "" && input.password !== "") {
      await axios
        .post(process.env.REACT_APP_URL_API + "/users/register", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            // localStorage.setItem("token", data?.usuario.token);

            localStorage.setItem("logueado", JSON.stringify(Usuario));

            setlogueado(Usuario);
          }, 1500);
          Swal.fire(data.mensaje, 'Se ha enviado un correo de verificación al email registrado')
        });

      setInput({
        name: "",
        email: "",
//        avatar: "",
        confirmPassword: "",
        password: "",
      });
    }
    window.location.href = '/login'
  };

  return (
    <div className={styles.flexContainer}>
      <form
        autoComplete="off"
        autoCapitalize="on"
        onSubmit={onSubmit}
        className={styles.container}
      >
        <div className={styles.formInputs}>
          <label>Nombre: </label>
          <input
            type={"text"}
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
{/*         <div className={styles.formInputs}>
          <label>Avatar: </label>
          <input
            type={"text"}
            name="avatar"
            value={input.avatar}
            onChange={handleChange}
          />
        </div> */}
        <div className={styles.formInputs}>
          <label>Contraseña: </label>
          <input
            type={shown ? "text" : "password"}
            name="password"
            id="password"
            value={input.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div className={styles.formInputs}>
          <label>Confirmar contraseña: </label>
          <input
            type={shown ? "text" : "password"}
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
          />
{/*           <button onClick={()=>switchShown()} className="btn btn-primary">
            {shown ? "Ocultar" : "👁️"}
          </button> */}
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}
        </div>
        <div className={styles.formInputs}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
          <button className={styles.btnLogin} type="submit" >
            Registrarse
          </button>

      </form>
      
    </div>
  );
}

export default Register;
