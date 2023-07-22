import React from "react";
import { RiUser3Fill } from "react-icons/ri";
import { useGlobalContext } from "../context/context";




const Navbar = () => {
  
const {todoCount} = useGlobalContext()
  

  return (
    <nav className=" h-20 bg-slate-700 flex items-center justify-between p-4 shadow-lg">
      <div className="">
        <h1 className="text-white font-semibold italic">TodoList</h1>
      </div>
      <div className="text-orange-500 h-full ">
        <div>{todoCount}</div>
        <div className=" text-2xl">
          <RiUser3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
