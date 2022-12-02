import { observer } from "mobx-react";
import { action } from "mobx";

const TodoView = observer(({ todo }) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };

  const onRename = () => {
    todo.task = prompt("Task name", todo.task) || todo.task;
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
    </li>
  );
});

const TodoList = observer(({ store }) => {
  const onNewTodo = () => {
    store.addTodo(prompt("Enter a new todo:", "coffee plz"));
  };

  const load = () => {
    action(() => {
      store.pendingRequests++;
    })(); // Warning 제거: action을 통해 derivation(여기서는 상태) 변경하기
    setTimeout(
      action(() => {
        store.addTodo("Random Todo " + Math.random());
        store.pendingRequests--;
      }),
      2000
    );
  };

  const fetchTodo = () => {
    store.fetchData();
  };

  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>

      <button onClick={load}>Load Data</button>
      <button onClick={fetchTodo}>Fetch Data</button>
    </div>
  );
});

export default TodoList;
