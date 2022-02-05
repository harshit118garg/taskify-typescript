import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <>
      <div className="todos">
        {todoList.map((t) => (
          <SingleTodo
            t={t}
            key={t.id}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
