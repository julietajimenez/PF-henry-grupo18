import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import UserContext from "../../context/userContext";
import { UserAuth } from "../../context/authContext";
import { GoogleButton } from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/UsersAction";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersDataBase = useSelector((state) => state.users.allUsers);

  const { logueado, setlogueado } = useContext(UserContext);
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = () => {
    if (user != null && JSON.stringify(user)!=='{}') {
      let usuarioYaExiste = usersDataBase.find((e) => e.email === user.email);
      if (usuarioYaExiste) {
        axios
          .post(process.env.REACT_APP_URL_API + "/users/login", usuarioYaExiste)
          .then((res) => {
            const { data } = res;
            setMensaje(data.mensaje);
            setTimeout(() => {
              setMensaje("");
              localStorage.setItem("token", data?.usuario.token);
              localStorage.setItem("logueado", JSON.stringify(data?.usuario));
              setlogueado(data?.usuario);
              navigate("/");
            }, 1500);
          })
          .catch((error) => {
            console.error(error);
            setMensaje("email u password incorrecta");
            setTimeout(() => {
              setMensaje("");
            }, 1500);
          });
      } else {
        const Usuario = {
          name: user.displayName,
          category: 'user',
          email: user.email,
          password: user.uid,
          status: "VERIFIED",
          googleAccount: true,
        };
        axios
          .post(process.env.REACT_APP_URL_API + "/users/register", Usuario)
          .then((res) => {
            const { data } = res;
            setMensaje(data.mensaje);
            setTimeout(() => {
              setMensaje("");
              // localStorage.setItem("token", data?.usuario.token);

              localStorage.setItem("logueado", JSON.stringify(Usuario));

              setlogueado(Usuario);
              navigate("/");
            }, 1500);
          });
      }
    }
  };
  const loguearse = async () => {
    try {
      await googleSignIn();
      setTimeout(() => {
        handleGoogleSignIn();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getAllUsers());
    handleGoogleSignIn();

    if (logueado !== "invitado") {
      navigate("/");
    }
  }, [user]);

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
        .post(process.env.REACT_APP_URL_API + "/users/login", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            localStorage.setItem("token", data?.usuario.token);
            localStorage.setItem("logueado", JSON.stringify(data?.usuario));
            setlogueado(data?.usuario);

            navigate(`/`);
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
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <h2>Iniciar Sesión!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={styles.formInputs}>
            <label htmlFor="email">email</label>
            <input
              onChange={(e) => HandleChange(e)}
              value={email}
              name="email"
              id="email"
              type="email"
              placeholder="example@email.com"
              autoComplete="off"
            />
          </div>

          <div className={styles.formInputs}>
            <label htmlFor="password">password</label>
            <input
              onChange={(e) => HandleChange(e)}
              value={password}
              name="password"
              id="password"
              type="password"
              placeholder="passwordexample"
              autoComplete="off"
            />
          </div>

          <button type="submit" className={styles.btnLogin}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
          <GoogleButton onClick={loguearse} />
          <p>
            Aun no tienes cuenta?{" "}
            <b
              className={styles.register}
              onClick={() => navigate("/register")}
            >
              Registrate!
            </b>
          </p>
        </form>
      </div>

      {mensaje && <div>{mensaje}</div>}
    </div>
  );
};

export default Login;
