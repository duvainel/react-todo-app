import React from "react";
import TodoItem from "../TodoItem";
import { useTodoContext } from "../../contexts/TodoContext";

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default TodoList;
