import { TODOACTION } from "../action/actionType";
const initalState = { todos: [] };

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    //add todo
    case TODOACTION.ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };

    //complete todo
    case TODOACTION.COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, isCompleted: !action.payload.isCompleted }
            : todo
        ),
      };

    //delete todo
    case TODOACTION.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
