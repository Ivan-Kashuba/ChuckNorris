import React from "react";
import styles from "./Joke.module.css";
import chuck from "./../../img/ChuckImage.svg";

const Joke = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.jokeText}>
          The only thing Chuck Norris says on a job interview: “Hi, I’m Chuck
          Norris and I start tomorrow. Any questions?”
        </div>
      </div>
      <div className={styles.aboba}>
        <img src={chuck} className={styles.chuckImage} alt="Chuck" />
      </div>
    </div>
  );
};

export default Joke;
