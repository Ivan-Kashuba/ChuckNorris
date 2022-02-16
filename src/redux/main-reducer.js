import { chuckAPI } from "../API/api";

const SET__LOGO = "SET__LOGO";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET__JOKE = "SET__JOKE";
let initialState = {
  logo: null,
  categories: [],
  jokeText: "",
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET__LOGO: {
      return { ...state, logo: action.logo };
    }
    case SET_CATEGORIES: {
      return { ...state, categories: action.categories };
    }

    case SET__JOKE: {
      return { ...state, jokeText: action.jokeText };
    }
    default: {
      return state;
    }
  }
};

// ActionCreators
const setLogo = (logo) => ({
  type: SET__LOGO,
  logo,
});

const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

const setJoke = (jokeText) => ({
  type: SET__JOKE,
  jokeText,
});

// ThunkCreators
export const getLogo = () => {
  return async (dispatch) => {
    let response = await chuckAPI.getRandom();
    dispatch(setLogo(response.data.icon_url));
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    let categories = await chuckAPI.getCategories();
    dispatch(setCategories(categories));
  };
};

export const getRandomJokeText = () => {
  return async (dispatch) => {
    let response = await chuckAPI.getRandom();
    dispatch(setJoke(response.data.value));
  };
};

export const getJokeText = (category) => {
  return async (dispatch) => {
    let data = await chuckAPI.getJokeText(category);
    dispatch(setJoke(data));
  };
};

export default MainReducer;
