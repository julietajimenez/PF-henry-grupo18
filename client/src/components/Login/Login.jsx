import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logueadoUser } from "../../redux/actions/UsersAction.js";

const Login = () => {

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { email, password } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      const Usuario = {
//        name: 'hernan',
        email,
        password,
      };
      setLoading(true);
      await axios
        .post("http://localhost:3001/users/login", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            localStorage.setItem("token", data?.usuario.token);
            localStorage.setItem("logueado", JSON.stringify(data?.usuario));

            dispatch(logueadoUser(Usuario))           

            navigate(`/catalogo`);
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("email u password incorrecta");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });
      setInputs({ email: "", password: "" });
      setLoading(false);
    }
  };

  return (
    <>
      <div >

        <h2>Iniciar Sesión!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <div>
              <label htmlFor="email">email</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={email}
                name="email"
                id="email"
                type="email"
                placeholder="email..."
                autoComplete="off"
              />
            </div>

          </div>

          <div >
            <div >
              <label htmlFor="password">password</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={password}
                name="password"
                id="password"
                type="password"
                placeholder="password..."
                autoComplete="off"
              />
            </div>
           
          </div>
          <button type="submit">
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
          <p>
            Aun no tienes cuenta?{" "}
            <b onClick={() => navigate("/register")}>Registrate!</b>
          </p>
        </form>
      </div>

      {mensaje && <div >{mensaje}</div>}
    </>
  );
};

export default Login;