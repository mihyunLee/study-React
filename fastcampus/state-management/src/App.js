import "./App.css";
import { observableTodoStore } from "./app/ObservableTodoStore";
import MobXExample from "./components/MobXExample";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <MobXExample />
      <br />
      <br />
      <TodoList store={observableTodoStore} />
    </div>
  );
}

export default App;
