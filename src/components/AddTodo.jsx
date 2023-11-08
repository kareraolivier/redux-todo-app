import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/actions";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim() === "") return;
    dispatch(addTodo({ id: Date.now(), text, isCompleted: false }));
    setText("");
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-3 text-lg border-2 border-gray-300 rounded-sm"
      />
      <button
        onClick={handleSubmit}
        className="p-4 text-white bg-green-600 rounded-sm mx-3 font-bold"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
