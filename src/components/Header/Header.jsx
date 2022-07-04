import React from "react";
import styles from "./Header.module.css";

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className="appContainer">
        <div className={styles.headerText}>Chuck Norris</div>
      </div>
    </header>
  );
};

export default Header;
