import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={styles.description}>
        This is a great place to learn nextjs
      </p>
    </div>
  );
};

export default Header;
