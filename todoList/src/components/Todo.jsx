import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaRegCircle } from 'react-icons/fa'
import { GoCheckCircleFill } from 'react-icons/go'
import { useGlobalContext } from "../context/context";

const Todo = ({title}) => {
    const [icon, setIcon] = useState(<FaRegCircle/>)

    const changeIcon = () => {
        setIcon(icon.type === FaRegCircle ? <GoCheckCircleFill/> : <FaRegCircle/>)
    }

  return (
    <section className=" rounded-full shadow-md shadow-slate-400 p-2 bg-white ">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2 p-2">
            <button onClick={changeIcon} className="text-orange-500">
            {icon}
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
