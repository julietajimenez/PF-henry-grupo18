import React from "react";
import styles from "./Pager.module.css";

const Pager = ({ currentPage, itemsPerPage, totalItems, pageHandler }) => {
  const pageNumbers = [];

  // Pages creation
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Pagination handlers
  const handlePrevious = () => {
    if (currentPage - 1 > 0) {
      pageHandler(currentPage - 1);
    }
  };

  const handlePagination = (number) => {
    pageHandler(number);
  };

  const handleNext = () => {
    if (currentPage + 1 <= pageNumbers.length) {
      pageHandler(currentPage + 1);
    }
  };
  return (
    <div className={styles.pagerContainer}>
      <ul>
        {currentPage !== 1 ? (
          <li onClick={() => handlePrevious()}>{"<"}</li>
        ) : null}
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => handlePagination(number)}>
            {number}
          </li>
        ))}
        {currentPage < pageNumbers.length ? (
          <li onClick={() => handleNext()}>{">"}</li>
        ) : null}
      </ul>
    </div>
  );
};

export default Pager;
