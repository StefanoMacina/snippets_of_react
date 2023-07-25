import React from "react";
import { useGlobalContext } from "../context/context";

const ManageBtns = () => {

    const {deleteAll} = useGlobalContext()

  return (
    <section className="p-4 lg:mx-auto lg:w-1/2">
      <div className="">
        <button onClick={deleteAll} className="bg-red-600 text-white font-semibold p-2 rounded-lg active:scale-110 active:bg-red-600 hover:bg-red-800">
          DELETE ALL
        </button>
      </div>
    </section>
  );
};

export default ManageBtns;
