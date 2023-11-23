import { useSelector, useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/todosSlice";

const TodoList = () => {
  const allTodos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (allTodos.length == 0) return <p>No todos on your list</p>

  return (
    <div className="text-lg font-semibold">
      {allTodos.map((todo) => (
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
              onClick={() => dispatch(completeTodo(todo.id))}
              className={`${
                todo.isCompleted === true ? "text-yellow-600" : "text-green-600"
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
      ))}
    </div>
  );
};

export default TodoList;
