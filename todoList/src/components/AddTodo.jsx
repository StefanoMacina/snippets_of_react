import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/context";

const AddTodo = () => {
  const { addTodo } = useGlobalContext();
  const [newTodo, setNewTodo] = useState("");
  const inputFocus = useRef()

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  useEffect(() => {
    inputFocus.current.focus()
  })

  return (
    <section className="bg-slate-200 p-4 ">
      <form className=" rounded-lg  grid grid-cols-1  lg:w-1/2 lg:mx-auto ">
        <div className="flex flex-col justify-center items-center gap-4 p-4 ">
          <label htmlFor="" className="font-semibold text-slate-800">
            Type something to do here
          </label>
          <input
          ref={inputFocus}
            onChange={handleChange}
            value={newTodo}
            type="text"
            placeholder="  type here"
            className="rounded-md p-2 focus:outline-blue-500 "
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addTodo(newTodo);
            }}
            className="bg-orange-500 rounded-full w-1/4 h-7 text-xs text-white font-semibold active:scale-110 active:shadow-xl"
          >
            ADD
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddTodo;
