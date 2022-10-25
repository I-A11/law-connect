import Header from "../components/common/Header";
import styles from "../components/home/HomeHero.module.css";

const businesses = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className='placeholder'>
        <h1>Businesses Page Placeholder</h1>
      </div>
    </div>
  );
};

export default businesses;
