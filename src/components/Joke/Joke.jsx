import styles from "./Joke.module.css";
import chuck from "./../../img/ChuckImage.svg";

const Joke = ({ jokeText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.jokeText}>{jokeText}</div>
      </div>
      <div className={styles.aboba}>
        <img src={chuck} className={styles.chuckImage} alt="Chuck" />
      </div>
    </div>
  );
};

export default Joke;
