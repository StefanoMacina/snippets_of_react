import React from "react";
import { useGlobalContext } from "../context/context";



const AddTodo = () => {

const {addTodo} = useGlobalContext()

  return (
    <section className="bg-slate-200 p-4 ">
      <form className="ring-1 ring-orange-500 rounded-lg  grid grid-cols-1 shadow-lg lg:w-1/2 lg:mx-auto ">
        <div className="flex flex-col justify-center items-center gap-4 p-4" >
          <label htmlFor="" className="font-semibold text-slate-800">Type something to do here</label>
          <input type="text" placeholder="  type here" className="rounded-md" />
          <button onClick={addTodo} className="bg-orange-500 rounded-full w-1/4 h-7 text-xs text-white font-semibold active:scale-110 active:shadow-xl">ADD</button>
        </div>
      </form>
      
    </section>
  );
};

export default AddTodo;
