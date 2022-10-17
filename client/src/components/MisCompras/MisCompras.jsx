import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./MisCompras.module.css";


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
      {comprasDelUsuario.length === 0 ?
        <div>Su historial de compras está vacío</div> :
      comprasDelUsuario
        .sort((a, b) => {
          const aDate = new Date(a.createdAt);
          const bDate = new Date(b.createdAt);
          return bDate - aDate;
        })
      .map((item) => (
        <div key={item.id} className={styles.itemsContainer} onClick={()=>navigate(`/compras/${item.id}`)}>
          <h2>CompraId: #{item.id}</h2>
          <h6>fecha: {item.createdAt.slice(0, 10)}</h6>
        
          <div >
            <h3>total: ${item.total}</h3>
          </div>
      </div>
      ))}
    </div>
  );
}

export default MisCompras;
