import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./MisCompras.module.css";

import UserContext from "../../context/userContext";
import { productById } from "../../redux/actions/ProductsActions";
import {
  getUser,
  getAllUsers,
} from "../../redux/actions/UsersAction";
import Loader from "../Loader/Loader";
import { getCompras } from "../../redux/actions/ComprasAction";

function MisCompras() {
  // const {logueado, setlogueado} = useContext(UserContext)
  const logueado = JSON.parse(localStorage.logueado);

  const users = useSelector((state) => state.users.allUsers);
  const comprasDelUsuario = useSelector((state) => state.users.compras);

  let compras;
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const userLogueado = users.find((e) => e.email === logueado.email);
  
  useEffect(() => {
    if (!users.length) {
      dispatch(getAllUsers());
    }
    dispatch(getCompras(userLogueado.email));
    
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
          <h2>CompraId: {item.id}</h2>
          <h4>fecha: {item.createdAt}</h4>
        {item.products.map( p => {
          {{console.log(p)}}


          return <div className="col-md-12">
            <div className="col-md-4">
              <div className="col-md-4">
                <img src={p.image} alt="" />
              </div>
              <button onClick={() => navigate(`/review/${p.id}`)}>
                Opinar
              </button>
            </div>
          </div>

        })}
          <div >
            <h3>total: ${item.total}</h3>
          </div>
      </div>
      ))}
    </div>
  );
}

export default MisCompras;
