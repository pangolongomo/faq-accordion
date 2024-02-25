import styles from "./App.module.scss";
import starIcon from "./assets/images/icon-star.svg";
import Accordion from "./components/Accordion";
import data from "./data/accordion-data.json";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <article>
        <div className={styles.title}>
          <img src={starIcon} alt="star icon" />
          <h2>FAQs</h2>
        </div>
        <Accordion data={data} />
      </article>
    </div>
  );
}

export default App;
