import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers} from "../../../redux/actions/UsersAction";
import Table from "react-bootstrap/Table";
import Searchbar from "./Searchbar";

export default function UpdateUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
console.log(users)
  return (
    <div style={{ minHeight: "80vh" }}>
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
