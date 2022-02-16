import React from "react";
import styles from "./Categories.module.css";
import СategoriesItem from "./СategoriesItem";

const Categories = ({ categories, getJokeText }) => {
  return (
    <div>
      <h2 className={styles.categoriesHeader}>Categories</h2>
      <div className={styles.tags}>
        {categories.map((category, index) => {
          return (
            <СategoriesItem
              categoryName={category}
              key={index}
              getJokeText={getJokeText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
