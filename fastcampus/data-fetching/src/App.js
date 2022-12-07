import "./App.css";
import Profile from "./components/SWRExample/Profile";
import Cache from "./components/SWRExample/Cache";
import Fetcher from "./components/SWRExample/Fetcher";
import Mutate from "./components/SWRExample/Mutate";

function App() {
  return (
    <div className="App">
      <Profile />
      <Cache />
      <Fetcher />
      <Mutate />
    </div>
  );
}

export default App;
