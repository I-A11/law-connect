import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import navToggle from "../../assets/icons/menu-mobile.svg";
import Logo from "../../assets/logos/LawConnect-logo-reverse-RGB.svg";

const Header = () => {
  return (
    <nav>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Link href='/'>
                <Image src={Logo} />
              </Link>
            </div>
          </div>
          <button className={styles.navToggle}>
            <Image src={navToggle} width={20} />
          </button>
        </div>
        <div className={`${styles.linksContainer} ${styles.showContainer}`}>
          <ul className={styles.links}>
            <li>
              <Link href='/people'>
                <div>For People</div>
              </Link>
            </li>
            <li>
              <Link href='/businesses'>
                <div>For Businesses</div>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <div>Contact</div>
              </Link>
            </li>
          </ul>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href='/'>
              <div>Login</div>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <button className='primaryBtn'>Create Free Account</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
