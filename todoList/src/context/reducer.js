import { ADD_TODO, COUNT_COMPLETED_TODOS, COUNT_TODO, FETCH_TODOS_SUCCESS } from "./action"

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
                todoList : [...state.todoList, payload]
            }
        case COUNT_TODO : 
            return {
                ...state,
                todoCount : state.todoList.length
            }
        case COUNT_COMPLETED_TODOS :
            return {
                ...state,
                completedTodos : [...state.completedTodos, payload]

            }
    }
    return state
}
export default reducer