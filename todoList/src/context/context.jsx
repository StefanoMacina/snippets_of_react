import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './reducer'
import axios from "axios";
import { ADD_TODO, COUNT_COMPLETED_TODOS, COUNT_TODO, FETCH_TODOS_SUCCESS } from "./action";

const todosUrl = 'https://jsonplaceholder.typicode.com/todos'

const AppContext = createContext();

const initialState = {
  todoList: [],
  todoCount : 0,
  
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    (async() => {
        try {
            const response = await axios.get(todosUrl)
            const data =  response.data.slice(0,4)
            dispatch({type : FETCH_TODOS_SUCCESS ,  payload : data})
            
        } catch (error) {
            console.log(error);
        }
    })()
  },[])
  
  useEffect(() => {
    dispatch({type : COUNT_TODO})
  },[state.todoList])


  const addTodo = (newTodoText) => {
    if(newTodoText){

      const newTodo = {
        id: new Date().getTime(),
        title : newTodoText,
        completed : false
      }

      dispatch({type : ADD_TODO, payload : newTodo})
    }
  }


  


  return <AppContext.Provider value={{
    ...state,
    
    addTodo
    }}>
        {children}
    </AppContext.Provider>;
};






const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
