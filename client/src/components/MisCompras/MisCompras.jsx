import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./MisCompras.module.css";

import UserContext from "../../context/userContext";
import { productById } from "../../redux/actions/ProductsActions";
import {
  getUser,
  getCompras,
  getAllUsers,
} from "../../redux/actions/UsersAction";
import Loader from "../Loader/Loader";

function MisCompras() {
  // const {logueado, setlogueado} = useContext(UserContext)
  const logueado = JSON.parse(localStorage.logueado);

  const users = useSelector((state) => state.users.allUsers);
  const comprasDelUsuario = useSelector((state) => state.users.compras);
  let compras;
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const userLogueado = users.find((e) => e.email === logueado.email);
  if (userLogueado) {
    compras = userLogueado.compras;
  }
  useEffect(() => {
    if (!users.length) {
      dispatch(getAllUsers());
    }
    if (compras) {
      dispatch(getCompras(compras));
    }
  }, [dispatch]);

  if (!comprasDelUsuario) {
    return <Loader />;
  }

  return (
    <div className={styles.carroContainer}>
      {comprasDelUsuario.length === 0 && (
        <div>Su historial de compras está vacío</div>
      )}

      {comprasDelUsuario.map((item) => (
        <div key={item.id} className={styles.itemsContainer}>
          <div className={styles.flexDataContainer}>
            <p>{item.name}</p>
          </div>

          <div className={styles.imgNameContainer}>
            <div className={styles.leftSideContainer}>
              <div className={styles.pepe}>
                <img src={item.image} alt="" />
              </div>
              <button onClick={() => navigate(`/review/${item.id}`)}>
                Opinar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MisCompras;
