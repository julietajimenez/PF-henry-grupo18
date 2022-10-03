import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorys } from "../../../redux/actions/CategorysActions";
import { postProducts } from "../../../redux/actions/ProductsActions";
import styles from "./CreacionProductos.module.css";

function CreacionProductos() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categorys.categorys);
  const [input, setInput] = useState({
    name: "",
    marca: "",
    price: "",
    description: "",
    stock: "",
    image: "",
    category: "",
  });
  useEffect(() => {
    dispatch(getAllCategorys());
  }, []);
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      category: [...new Set([...input.category, e.target.value])],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProducts(input));
    alert("creado con exito");
    setInput({
      name: "",
      marca: "",
      price: "",
      description: "",
      stock: "",
      image: "",
      category: "",
    });
  }
  return (
    <div className={styles.flexContainer}>
      <form
        className={styles.container}
        autoComplete="off"
        autoCapitalize="on"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.formInputs}>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Marca: </label>
          <input
            type="text"
            name="marca"
            value={input.marca}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Precio: </label>
          <input
            type="text"
            name="price"
            value={input.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Imagen: </label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Stock: </label>
          <input
            type="number"
            name="stock"
            value={input.stock}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Descripción: </label>
          <textarea
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.formInputs}>
          <select onChange={(e) => handleSelect(e)}>
            {categories &&
              categories.map((e) => {
                return <option value={e}>{e}</option>;
              })}
          </select>
        </div>
        <button className={styles.btnLogin} type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default CreacionProductos;
