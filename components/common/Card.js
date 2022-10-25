import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ image, heading, text }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <Image src={image} height={360} />
      </div>
      <div className={styles.cardText}>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
