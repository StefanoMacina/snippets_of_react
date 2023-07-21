import { createContext, useContext, useEffect, useReducer } from "react";
import  reducer  from './reducer'
const url = 'https://react-corso-api.netlify.app/.netlify/functions/cartshop'
import  axios  from "axios";
import { DATA_FETCHING_FAILED, DATA_FETCHING_STARTED, DATA_FETCHING_SUCCESS, DECREASE_QTY, DELETE_ALL_ITEMS, DELETE_ITEM, INCREASE_QTY, TOTAL_AMOUNT } from "./action";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

// context
const AppContext = createContext();


// componente in cui racchiudere tutta l'applicazione dal main.jsx
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  const deleteAllitems = () => {
    dispatch({type : DELETE_ALL_ITEMS})
  }

  const deleteOneItem = (_id) => {
    dispatch({type : DELETE_ITEM, payload: _id})
  }
 
  const increaseQty = (_id) => {
    dispatch({ type : INCREASE_QTY, payload: _id})
  }

  const decreaseQty = (_id) => {
    dispatch({type : DECREASE_QTY, payload: _id})
  }

  useEffect(() => {
    dispatch({ type : TOTAL_AMOUNT})
    console.log(state.total);
  },[state.products])

  useEffect(() => {
    (async() => {
      dispatch({type : DATA_FETCHING_STARTED})
      try {
        const response = await axios.get(url)
        // console.log(response.data);
        dispatch({type : DATA_FETCHING_SUCCESS, payload: response.data.default })
        // console.log(response.data.default);
      } catch (error) {
        dispatch({ type : DATA_FETCHING_FAILED})
      }
    })()

 }, [])

  return( 
  <AppContext.Provider value={{
    ...state,
   deleteAllitems,
   deleteOneItem,
   increaseQty,
   decreaseQty,
   
  }}>
    {children}
    </AppContext.Provider>)
};


const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
