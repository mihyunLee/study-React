import React from "react";

const List = () => {
  const todos = [
    { id: 1, todo: "Eat breakfast" },
    { id: 2, todo: "Wash dishes" },
    { id: 3, todo: "make some foods" },
  ];

  const Item = (props) => {
    return (
      <li>
        {/* {props.key}  */}
        {/* Warning: key는 React가 단순히 판별하기 위해 사용된 것이지 자식에게 props로 전달되지 않는다. */}
        {props.todo}
      </li>
    );
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <div>{todoList}</div>;
};

export default List;
