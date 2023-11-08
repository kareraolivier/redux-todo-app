import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../redux/action/actions";

const TodoList = () => {
  let allTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="text-lg font-semibold">
      {allTodos.length !== 0
        ? allTodos.map((todo) => (
            <div key={todo.id} className="flex gap-4 justify-between">
              <p
                className={`${
                  todo.isCompleted === true && "text-gray-400 line-through"
                } text-lg font-semibold `}
              >
                {todo.text}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    dispatch(completedTodo(todo.id, todo.isCompleted))
                  }
                  className={`${
                    todo.isCompleted === true
                      ? "text-yellow-600"
                      : "text-green-600"
                  } font-semibold`}
                >
                  {todo.isCompleted === true ? "completed" : "complete"}
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="font-semibold text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : "No todo on your list"}
    </div>
  );
};

export default TodoList;
