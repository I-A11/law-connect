import React from "react";
import Header from "../common/Header";
import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Home Hero</h1>
    </div>
  );
};

export default HomeHero;
