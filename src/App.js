import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import CategoriesContainer from "./components/Categories/CategoriesContainer";
import JokeContainer from "./components/Joke/JokeContainer";

function App() {
  return (
    <div className="appContainer">
      <HeaderContainer />
      <CategoriesContainer />
      <JokeContainer />
    </div>
  );
}

export default App;
