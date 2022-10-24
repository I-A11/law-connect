import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import menuBar from "../../assets/icons/menu-mobile.svg";
import Logo from "../../assets/logos/LawConnect-logo-reverse-RGB.svg";
const Header = () => {
  return (
    <nav>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Image src={Logo} />
            </div>
          </div>
          <div className={styles.menubar}>
            <Image src={menuBar} width={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
