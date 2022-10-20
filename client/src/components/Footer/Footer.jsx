import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className={styles.navContainer}>
      <div>
        <ul className={styles.ulContainer}>
          <Link to={"/"} className={styles.underline}>
            <li>Sobre Nosotros</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className={styles.ulContainer}>
          <Link to={"/support"} className={styles.underline}>
            <li>Contáctanos</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
