import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/actions/ProductsActions";
import Loader from "../../Loader/Loader";
import Table from "react-bootstrap/Table";
import Searchbar from "./SearchbarProducts";
import Pager from "../../Paginado/Pager";
export default function SearchToModify() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const page = useSelector((state) => state.products.pages);

  const [currentPage, setCurrentPage] = useState(page);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (products.length <= 0) {
    return <Loader />;
  }

  const handlePage = (number) => {
    setCurrentPage(number);
  };
  const productsPerPage = 23,
    indexOfLastProduct = currentPage * productsPerPage,
    indexOfFirstProduct = indexOfLastProduct - productsPerPage,
    currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div style={{ minHeight: "80vh", maxWidth: "100vw" }}>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Activo/Inactivo</th>
            <th>Stock</th>
            <th>Precio</th>

            <th>
              <Searchbar />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProducts &&
            currentProducts.map((e) => {
              return (
                <tr>
                  <td>{e.id.slice(0, 13)}</td>
                  <td>{e.name}</td>
                  <td>{e.brand}</td>
                  <td>{e.category}</td>
                  <td>{e.active === true ? "Activo" : "Inactivo"}</td>
                  <td>{e.stock}</td>
                  <td>${e.price}</td>

                  <td>
                    <Link to={e.id}>Actualizar</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
        <Pager
          currentPage={currentPage}
          pageHandler={handlePage}
          itemsPerPage={productsPerPage}
          totalItems={products.length}
        />
    </div>
  );
}
