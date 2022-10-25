import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import navToggle from "../../assets/icons/menu-mobile.svg";
import Logo from "../../assets/logos/LawConnect-logo-reverse-RGB.svg";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

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
          <button
            className={styles.navToggle}
            onClick={() => setShowLinks(!showLinks)}
          >
            <Image src={navToggle} width={20} />
          </button>
        </div>
        <div
          className={`${
            showLinks
              ? `${styles.linksContainer} ${styles.showContainer}`
              : `${styles.linksContainer}`
          }`}
        >
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
          <div className={styles.loginContainer}>
            <div
              className={styles.loginLinks}
              onClick={() => setShowLinks(false)}
            >
              <Link href='/'>
                <div>Login</div>
              </Link>
            </div>
            <div
              className={styles.loginLinks}
              onClick={() => setShowLinks(false)}
            >
              <Link href='/'>
                <button className='primaryBtn'>Create Free Account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
