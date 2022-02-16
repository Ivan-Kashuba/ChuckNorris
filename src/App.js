import Header from "./components/Header/Header";
import "./App.css";
import Categories from "./components/Categories/Categories";
import Joke from "./components/Joke/Joke";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Categories />
      <Joke />
    </div>
  );
}

export default App;
