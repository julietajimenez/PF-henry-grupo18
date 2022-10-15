import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../../redux/actions/UsersAction";
import Table from "react-bootstrap/Table";

export default function UpdateUsers() {
  const dispatch = useDispatch();
  const [dark, setDark] = useState("white");
  const users = useSelector((state) => state.users.allUsers);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  let count = 0;
  console.log(users);
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
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((e) => {
            return (
              <tr>
                <td>{(count += 1)}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.category}</td>
                <td>{e.active}</td>
                <td>{e.status}</td>
                <td><Link to={`/${e.id}`}>Actualizar</Link></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
