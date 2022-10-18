
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../../redux/actions/ProductsActions";
import styles from "./Searchbar.module.css";

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProductsByName(name));
  }

  return (
    <div className={styles.searchContainer}>
      <button className={styles.button} onClick={(e) => handleSubmit(e)} type="submit">
        SEARCH
      </button>
      <input
      className={styles.input}
        type={"text"}
        placeholder={"search by name..."}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
