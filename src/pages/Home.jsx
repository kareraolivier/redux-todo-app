import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-8 p-1 md:p-10 w-96">
        <h1 className="text-4xl text-green-600 font-bold py-10 text-center">
          Todo App
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
