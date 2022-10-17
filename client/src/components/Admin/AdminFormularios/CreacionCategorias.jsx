import React, { useState } from "react";
import { createCategory } from "../../../redux/actions/CategorysActions.js";
import { useDispatch } from "react-redux";
import swal from "sweetalert"
function CreacionCategorias() {
  const [input, setInput] = useState({
    name: "",
    image: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(createCategory(input));
    swal("Categoría creada");
    setInput({
      name: "",
      image: "",
    });
  };


  return (
    <div style={{ minHeight: "80vh" }}>
      <form autoComplete="off" autoCapitalize="on" onSubmit={handleSubmit}>
        <label>Nombre de la categoría:</label>
        <input
          placeholder="name"
          name="name"
          value={input.name}
          required
          onChange={handleChange}
        />
        <label>Imagen de la categoría:</label>
        <input
          placeholder="image"
          name="image"
          value={input.image}
          required
          onChange={handleChange}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default CreacionCategorias;
