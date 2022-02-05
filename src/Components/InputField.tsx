import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          className="inputBox"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="inputBtn" type="submit">
          GO
        </button>
      </form>
    </>
  );
};

export default InputField;