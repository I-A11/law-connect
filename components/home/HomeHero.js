import React from "react";
import Image from "next/image";
import Header from "../common/Header";
import styles from "./HomeHero.module.css";
import HeroMobileImage from "../../assets/images/lc-hero-mobile@2x.png";
import HeroDesktopImage from "../../assets/images/lc-hero-desktop@2x.png";

const HomeHero = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className='section'>
        <div className={styles.heroContainer}>
          <div className={styles.HeroMobileImage}>
            <Image src={HeroMobileImage} />
          </div>
          <div className={styles.heroDesktopImage}>
            <Image src={HeroDesktopImage} />
          </div>
          <div className={styles.heroText}>
            <h1>The place to work with your lawyer</h1>
            <p>
              Your lawyer uses LawConnect to share information with you about
              your legal case in a private, convenient and secure way.
            </p>
            <button className={`primaryBtn ${styles.heroBtn}`}>
              Create Free Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
