import Image from "next/image";
import SigningDesktopImage from "../../assets/images/lc-sign-docs-desktop@2x.png";
import SigningMobileImage from "../../assets/images/lc-sign-docs-mobile@2x.png";
import styles from "./Signing.module.css";

const Signing = () => {
  return (
    <div className={styles.container}>
      <div className='section'>
        <div className={styles.signingSection}>
          <div className={styles.signingDesktopImage}>
            <Image src={SigningDesktopImage} alt='Signing desktop image' />
          </div>
          <div className={styles.signingMobileImage}>
            <Image src={SigningMobileImage} alt='Signing mobile image' />
          </div>
          <div className={styles.signingText}>
            <h2>Signing Documents Electronically</h2>
            <p>
              LawConnect integrates with DocuSign to provide our users with a
              quick, easy and secure way to sign important legal documents
              online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signing;
