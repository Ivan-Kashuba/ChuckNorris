import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import axios from "axios";

const Header = () => {
  const [logo, setLogo] = useState("");
  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      setLogo(response.data.icon_url);
    });
  });

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="ChuckImg" />
      <div className={styles.headerText}>Chuck Norris</div>
    </header>
  );
};

export default Header;
