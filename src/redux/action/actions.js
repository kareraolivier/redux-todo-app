import { TODOACTION } from "./actionType";
export const addTodo = (todo) => {
  return {
    type: TODOACTION.ADD_TODO,
    payload: todo,
  };
};

export const completedTodo = (todoId, isCompleted) => {
  return {
    type: TODOACTION.COMPLETED_TODO,
    payload: {
      todoId,
      isCompleted,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: TODOACTION.DELETE_TODO,
    payload: todoId,
  };
};
