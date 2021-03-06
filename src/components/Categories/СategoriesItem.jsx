import React from "react";
import styles from "./Categories.module.css";

const –°ategoriesItem = ({ categoryName, getJokeText }) => {
  return (
    <div className={styles.tagItem} onClick={() => getJokeText(categoryName)}>
      {categoryName}
    </div>
  );
};

export default –°ategoriesItem;
