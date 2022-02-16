import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});

export const chuckAPI = {
  getLogo() {
    return instance.get("random").then((response) => response.data);
  },
};
