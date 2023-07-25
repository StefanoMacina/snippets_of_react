import React from "react";
import { TiDelete } from "react-icons/ti";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Todo = ({ id, title, completed }) => {
  const { toggleTodoStatus } = useGlobalContext();

  const handleCompleted = () => {
    toggleTodoStatus(id, !completed);
  };

  return (
    <section className="rounded-full shadow-md shadow-slate-400 p-2 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 p-2">
          <button onClick={handleCompleted} className="text-orange-500">
            {completed ? <FaCheckCircle /> : <FaRegCircle />}
          </button>
          <p>{title}</p>
        </div>
        <div className="p-2 text-2xl text-red-600 active:scale-110">
          <TiDelete />
        </div>
      </div>
    </section>
  );
};

export default Todo;
