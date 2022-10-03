 import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  getAllCategorys,
} from "../../../redux/actions/CategorysActions";
import styles from "./CategoryFilter.module.css";

export default function CategoryFilter(props) {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.categorys.allCategorys);

  useEffect(() => {
    dispatch(getAllCategorys());
  }, [dispatch]);

  function handleSelect(e) {
    dispatch(filterByCategory(e.target.value));
    props.setCurrentPage(1);
    //props.setFilter(true);
  }

  return (
    <div className={styles.categoryContainer}>
      <select onChange={(e) => handleSelect(e)}>
        <option value={"all"}>Todas las categorias</option>
        {categorys?.map((e) => {
          return (
            <option value={e} key={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
} 
