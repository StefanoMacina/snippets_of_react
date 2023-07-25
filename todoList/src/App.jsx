import React from "react";
import AddTodo from "./components/addTodo";
import List from "./components/List";
import Navbar from "./components/Navbar";
import CheckTodos from "./components/CheckTodos";


const App = () => {
  return (
    <>
      <Navbar />
      <AddTodo />
      <CheckTodos/>
      <List />
    </>
  );
};

export default App;
