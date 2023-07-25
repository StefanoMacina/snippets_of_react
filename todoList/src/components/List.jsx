import React from "react";
import Todo from "./Todo";
import { useGlobalContext } from "../context/context";

const List = () => {
  const { todoList, completedTodos, uncompletedTodos } = useGlobalContext();
  

  return (
    <section className="bg-slate-200 min-h-screen ">
      <ul className="grid gap-4 p-4 ring-orange-900 lg:w-1/2 lg:mx-auto ">
        {todoList.map((el) => {
          if(el.title){
            return (
              <li key={el.id}>
                <Todo title={el.title} completed={el.completed} />
                
              </li>
            );

          }
        })}
      </ul>
    </section>
  );
};

export default List;
