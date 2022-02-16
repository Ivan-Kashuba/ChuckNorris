import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});

export const chuckAPI = {
  getRandom() {
    return instance.get("random").then((response) => response);
  },
  getCategories() {
    return instance.get("categories").then((response) => response.data);
  },
  getJokeText(category) {
    return instance
      .get(`random?category=${category}`)
      .then((response) => response.data.value);
  },
};
