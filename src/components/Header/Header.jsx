import React from "react";
import styles from "./Header.module.css";

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="ChuckImg" />
      <div className={styles.headerText}>Chuck Norris</div>
    </header>
  );
};

export default Header;
