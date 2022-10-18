import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../../redux/actions/UsersAction";
import Table from "react-bootstrap/Table";
import Searchbar from "./Searchbar";
import styles from "./CreacionProductos.module.css";

export default function UpdateUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  console.log(users)
  return (
    <div style={{ minHeight: "80vh" }}>
      <div className={styles.div}>
        <button className={`${styles.btnLogin}`} style={{marginTop:'450px', marginLeft:'30px'}} onClick={() => navigate(-1)}>VOLVER</button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Categoría</th>
            <th>Activo/Inactivo</th>
            <th>Estado</th>
            <th>
              <Searchbar />
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((e) => {
            return (
              <tr>
                <td>{e.id.slice(0, 13)}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.category}</td>
                <td>{e.active === true ? "Activo" : "Inactivo"}</td>
                <td>{e.status}</td>
                <td>
                  <Link to={`/dashboard/update/${e.id}`}>Actualizar</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
