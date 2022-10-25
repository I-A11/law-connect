import Image from "next/image";
import ShareImage from "../../assets/images/lc-share-docs@2x.png";
import styles from "./Sharing.module.css";

const Sharing = () => {
  return (
    <div className={styles.container}>
      <div className='section'>
        <div className={styles.sharingSection}>
          <div className={styles.sharingText}>
            <h2>Sharing Documents</h2>
            <p>
              Your lawyer will share documents related to your case with you,
              via LawConnect. Each time a document is shared by your lawyer, you
              will receive an email notification so you can access the document.
            </p>
            <p className={styles.secondParagraph}>
              If you already have a LawConnect account, you can login and an
              alert will be in your notifications tab that a document has been
              shared.
            </p>
          </div>
          <div className={styles.sharingImage}>
            <Image src={ShareImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharing;
