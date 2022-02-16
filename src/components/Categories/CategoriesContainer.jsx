import React, { useEffect } from "react";
import Categories from "./Categories";
import { connect } from "react-redux";
import { getCategories, getJokeText } from "../../redux/main-reducer";

const CategoriesContainer = ({ categories, getCategories, getJokeText }) => {
  useEffect(() => {
    getCategories();
  });
  return <Categories categories={categories} getJokeText={getJokeText} />;
};

let mapStateToProps = (state) => ({
  categories: state.main.categories,
});

export default connect(mapStateToProps, { getCategories, getJokeText })(
  CategoriesContainer
);
