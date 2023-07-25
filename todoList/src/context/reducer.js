import {
  ADD_TODO,
  COUNT_TODO,
  DELETE_ALL,
  DELETE_TODO,
  FETCH_TODOS_SUCCESS,
  TOGGLE_TODO_STATUS,
} from "./action";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_TODOS_SUCCESS:
      const { completed, uncompleted } = payload;
      return {
        ...state,
        todoList: [...completed, ...uncompleted],
        completedTodos: completed,
        uncompletedTodos: uncompleted,
      };
    case TOGGLE_TODO_STATUS:
      const { todoId, isCompleted } = payload;
      const updatedTodoList = state.todoList.map((todo) =>
        todo.id === todoId ? { ...todo, completed: isCompleted } : todo
      );
      return {
        ...state,
        todoList: updatedTodoList,
        completedTodos: updatedTodoList.filter((todo) => todo.completed),
        uncompletedTodos: updatedTodoList.filter((todo) => !todo.completed),
      };
    case COUNT_TODO:
      return {
        ...state,
        todoCount: state.todoList.length,
      };
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };

    case DELETE_TODO :
        return {
            ...state,
            todoList : state.todoList.filter((el) => el.id !== payload),
            completedTodos : state.completedTodos.filter(el  => el.id !== payload)
        }
    case DELETE_ALL :
        return {
            ...state,
            completedTodos : [],
            uncompletedTodos : [],
            todoList : []
        }
  }
  return state;
};
export default reducer;
