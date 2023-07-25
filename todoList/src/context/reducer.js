import {
  ADD_TODO,
  COUNT_TODO,
  FETCH_TODOS_SUCCESS,
  TOGGLE_TODO_STATUS,
} from "./action";

// const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case FETCH_TODOS_SUCCESS:
//       const { completed, uncompleted } = payload;
//       return {
//         ...state,
//         todoList: [...completed, ...uncompleted],
//         completedTodos: completed,
//         uncompletedTodos: uncompleted,
//       };
//     case COUNT_TODO:
//       return {
//         ...state,
//         todoCount: state.todoList.length,
//       };
//     case ADD_TODO:
//       return {
//         ...state,
//         todoList: [...state.todoList, payload],
//       };
//   }
//   return state;
// };

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
  }
  return state;
};
export default reducer;
