import { ADD_TODO, FETCH_TODOS_SUCCESS } from "./action"

 const reducer = (state, {type, payload}) => {
    switch (type){
        case FETCH_TODOS_SUCCESS :
            
            return {
                ...state,
                todoList : payload
            }
        case ADD_TODO : 
            return {
                ...state,
                todoList : []
            }
    }
    return state
}
export default reducer