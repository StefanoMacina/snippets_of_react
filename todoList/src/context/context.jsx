import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  COUNT_TODO,
  FETCH_TODOS_SUCCESS,
  DELETE_TODO,
  DELETE_ALL,
} from "./action";

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

const AppContext = createContext();

const initialState = {
  todoList: [],
  todoCount: 0,
  completedTodos: [],
  uncompletedTodos: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(todosUrl);
        const data = await response.data.slice(0, 5);
        // dispatch({type : FETCH_TODOS_SUCCESS ,  payload : data})
        const completed = await data.filter((el) => el.completed);
        const uncompleted = await data.filter((el) => !el.completed);
        dispatch({
          type: FETCH_TODOS_SUCCESS,
          payload: { completed, uncompleted },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    dispatch({ type: COUNT_TODO });
  }, [state.todoList]);

  const addTodo = (newTodoText) => {
    if (newTodoText) {
      const newTodo = {
        id: new Date().getTime(),
        title: newTodoText,
        completed: false,
      };
      dispatch({ type: ADD_TODO, payload: newTodo });
    }
  };

  const toggleTodoStatus = (todoId, isCompleted) => {
    dispatch({ type: TOGGLE_TODO_STATUS, payload: { todoId, isCompleted } });
  };

  const deleteTodo = (todoId) => {
    dispatch({type : DELETE_TODO, payload : todoId})
  }

  const deleteAll = () => {
    dispatch({type : DELETE_ALL})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleTodoStatus,
        deleteTodo,
        deleteAll,
        addTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
