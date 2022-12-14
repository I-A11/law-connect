import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import navToggle from "../../assets/icons/menu-mobile.svg";
import Logo from "../../assets/logos/LawConnect-logo-reverse-RGB.svg";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Link href='/'>
                <Image src={Logo} alt='Logo' />
              </Link>
            </div>
          </div>
          <button
            className={styles.navToggle}
            onClick={() => setShowLinks(!showLinks)}
            aria-label='Toggle button'
          >
            <Image src={navToggle} width={20} alt='Toggle icon' />
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
              <Link href='/people' passHref>
                <div>For People</div>
              </Link>
            </li>
            <li>
              <Link href='/businesses' passHref>
                <div>For Businesses</div>
              </Link>
            </li>
            <li>
              <Link href='/contact' passHref>
                <div>Contact</div>
              </Link>
            </li>
          </ul>
          <div className={styles.loginContainer}>
            <div
              className={styles.loginLinks}
              onClick={() => setShowLinks(false)}
            >
              <Link href='/' passHref>
                <div>Login</div>
              </Link>
            </div>
            <div
              className={styles.loginLinks}
              onClick={() => setShowLinks(false)}
            >
              <Link href='/' passHref>
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
