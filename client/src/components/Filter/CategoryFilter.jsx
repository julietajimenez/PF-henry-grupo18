import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  getAllCategorys,
} from "../../redux/actions/CategorysActions";
import styles from "./CategoryFilter.module.css";

export default function CategoryFilter(props) {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.categorys.allCategorys);

  useEffect(() => {
    dispatch(getAllCategorys());
  }, []);

  function handleSelect(e) {
    e.preventDefault();
    dispatch(filterByCategory(e.target.value));
    props.setCurrentPage(1);
  }
  return (
    <div className={styles.categoryContainer}>
      <select onClick={(e) => handleSelect(e)}>
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
