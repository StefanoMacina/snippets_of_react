import { ADD_TODO, COUNT_COMPLETED_TODOS, COUNT_TODO, FETCH_TODOS_SUCCESS } from "./action"

 const reducer = (state, {type, payload}) => {
    switch (type){
        case FETCH_TODOS_SUCCESS :
            const {completed, uncompleted} = payload
            return {
                ...state,
                todoList : [...completed, ...uncompleted] ,
                completedTodos : completed,
                uncompletedTodos : uncompleted
            }
            case COUNT_TODO : 
            return {
                ...state,
                todoCount : state.todoList.length
            }
            case ADD_TODO : 
                return {
                    ...state,
                    todoList : [...state.todoList, payload]
                }
        }
    return state
}
export default reducer