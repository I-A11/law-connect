import Card from "../common/Card";
import styles from "./Solution.module.css";
import SafeImage from "../../assets/images/lc-safe-docs@2x.jpg";
import WorkRemote from "../../assets/images/lc-work-remote@2x.jpg";
import greaterCollab from "../../assets/images/lc-greater-collab@2x.jpg";

const Solution = () => {
  return (
    <div className={styles.container}>
      <div className='section'>
        <h2>One Solution Designed to Make Your Firm More Money</h2>
        <div className={styles.solutionCardsContainer}>
          <div className={styles.cardContainer}>
            <Card
              image={SafeImage}
              heading='Safe Documents'
              text='LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.'
            />
            <Card
              image={WorkRemote}
              heading='Work remotely'
              text='You can sign in to LawConnect and view, collaborate and share your documents from anywhere..'
            />
            <Card
              image={greaterCollab}
              heading='Greater Collaboration'
              text='Collaborate on documents with clients, lawyers and other parties with LawConnect’s Comment and Reply.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
