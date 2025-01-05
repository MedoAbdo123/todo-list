import { useState, useEffect } from 'react';
import './App.css';
import Buttons from './components/Buttons.tsx';
import InputTodos from './components/InputTodos.tsx';
import { Todo } from './Types/Types.ts';
import TodoList from './components/TodoList.tsx';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeFilter, setActiveFilter] = useState<boolean | null>(null)
  
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (todo.trim()) {
      const newTodo = { id: Date.now(), todo, isDone: false };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  }

  return (
    <div className="flex justify-center items-center transition-all">
      <div className="bg-[#0a141e] transition-all text-white w-[100%] text-wrap mt-16 text-6xl shadow-black shadow-2xl font-bold p-4 rounded-xl">
        <h1>
          مهامي
        </h1>
        <hr />

        <div className="block text-xl mt-5">
          <Buttons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>
        <div className="App">
          <TodoList todos={todos} setTodos={setTodos} activeFilter={activeFilter} />
        </div>
        <div className="">
          <InputTodos todo={todo} setTodo={setTodo} handleAdd={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
