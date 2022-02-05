import React, { useState, useRef, useEffect } from "react";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Todo } from "../model";

type Props = {
  t: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ t, todoList, setTodoList }) => {
  // use State for edit functionality
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoText, setEditTodoText] = useState<string>(t.todo);

  //useRef to keep the focus inside the text Box
  const inputRef = useRef<HTMLInputElement>(null);

  // handle Done
  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  //handle Delete
  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  //handle Edit
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodoList(
      todoList.map((t) => (t.id === id ? { ...t, todo: editTodoText } : t))
    );

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form className="singleTodo" onSubmit={(e) => handleEdit(e, t.id)}>
        {edit ? (
          <input
            ref={inputRef}
            type="text"
            value={editTodoText}
            onChange={(e) => setEditTodoText(e.target.value)}
            className="todoText"
          />
        ) : t.isDone ? (
          <s className="todoText">{t.todo}</s>
        ) : (
          <span className="todoText">
            <b>{t.todo}</b>
          </span>
        )}

        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !t.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiTwotoneEdit style={{ color: "darkblue" }} />
          </span>
          <span className="icon" onClick={() => handleDelete(t.id)}>
            <AiTwotoneDelete style={{ color: "red" }} />
          </span>
          <span className="icon" onClick={() => handleDone(t.id)}>
            <MdOutlineDownloadDone style={{ color: "green" }} />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
