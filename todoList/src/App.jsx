import React from "react";
import AddTodo from "./components/addTodo";
import List from "./components/List";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AddTodo />
      <List />
    </>
  );
};

export default App;
