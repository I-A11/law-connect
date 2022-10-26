import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../components/home/HomeHero.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className='placeholder'>
        <h1>Contact Page Placeholder</h1>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
