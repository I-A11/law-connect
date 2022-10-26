import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../components/home/HomeHero.module.css";

const businesses = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className='placeholder'>
        <h1>Businesses Page Placeholder</h1>
      </div>
      <Footer />
    </div>
  );
};

export default businesses;
