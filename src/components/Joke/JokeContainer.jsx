import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRandomJokeText, getJokeText } from "../../redux/main-reducer";
import Joke from "./Joke";

const JokeContainer = ({ jokeText, getRandomJokeText }) => {
  useEffect(() => {
    getRandomJokeText();
  }, []);

  return <Joke jokeText={jokeText} />;
};

let mapStateToProps = (state) => ({
  jokeText: state.main.jokeText,
});

export default connect(mapStateToProps, { getRandomJokeText, getJokeText })(
  JokeContainer
);
