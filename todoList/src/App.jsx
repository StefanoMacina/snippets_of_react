import React from "react";
import AddTodo from "./components/addTodo";
import List from "./components/List";
import Navbar from "./components/Navbar";
import CheckTodos from "./components/CheckTodos";
import StatusBar from "./components/StatusBar";

const App = () => {
  return (
    <>
      <Navbar />
      <AddTodo />
      <CheckTodos/>
      <StatusBar />
      <List />
    </>
  );
};

export default App;
