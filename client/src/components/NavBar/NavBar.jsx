import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <div>
        <ul className={styles.ulContainer}>
        <Link to={"/"} className={styles.underline}>
          <li>Logo</li>
          </Link>
          <Link to={"/catalogo"} className={styles.underline}>
            <li>Catalogo</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className={styles.ulContainer}>
          <Link to={"/carrito"} className={styles.underline}>
            <li>Carrito</li>
          </Link>
          <Link to={"/login"} className={styles.underline}>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
