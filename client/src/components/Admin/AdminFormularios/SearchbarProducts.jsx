import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../../../redux/actions/ProductsActions";

export default function SearchbarProducts() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
    e.target.search = ""
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProductsByName(name));
  }
  function handleReset(e) {
    e.preventDefault();
    dispatch(getProductsByName(""));
  }


  return (
    <div>
      <input
        type={"text"}
        name="search"
        placeholder={"search by name..."}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={(e) => handleSubmit(e)} type="submit">
        🔎
      </button>
      <button onClick={(e) => handleReset(e)} type="submit">
        🔄
      </button>
    </div>
  );
}
