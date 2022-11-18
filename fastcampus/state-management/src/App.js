import "./App.css";
import Counter2 from "./components/Counter2";
import TestMocking from "./components/TestMocking";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <TestMocking />
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;
