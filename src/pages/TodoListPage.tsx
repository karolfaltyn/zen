import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { TodoItem } from "../components/TodoItem";
import { Button } from "../components/ui/button";

export const TodoListPage = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);

  // Retrieve tasks from local storage on initial load
  useEffect(() => {
    const storedTodo = localStorage.getItem("tasks");
    if (storedTodo && storedTodo !== "[]") {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  // Save tasks to local storage whenever todo state changes
  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(todo));
    }
  }, [todo]);

  const addTask = () => {
    if (newTodo.trim() && newTodo.length <= 500) {
      setTodo([...todo, newTodo]);
      setNewTodo("");
      setCharCount(0);
    }
  };

  const handleNewTaskChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (event.target.value.length <= 500) {
      setNewTodo(event.target.value);
      setCharCount(event.target.value.length);
    }
  };

  const deleteTask = (index: number) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  const editTask = (index: number, newTask: string) => {
    const updatedTodo = todo.map((task, i) => (i === index ? newTask : task));
    setTodo(updatedTodo);
  };

  return (
    <div className="container">
      <Navbar />
      <main className="flex justify-center">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <h1 className="mb-10 flex justify-center font-sarabun text-2xl font-medium text-[#444] dark:text-[#fafafa]">
            To-Do List
          </h1>
          <div>
            <textarea
              value={newTodo}
              onChange={handleNewTaskChange}
              placeholder="Add new task"
              className="w-full rounded border bg-gray-100 p-2 text-black dark:bg-[#444] dark:text-white"
            />
            <div className="mb-8 mt-2 flex items-center justify-between">
              <span className="font-sarabun text-[#999]">
                {charCount}/500 characters
              </span>
              <Button onClick={addTask}>Add</Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {todo.map((task, index) => (
              <TodoItem
                key={index}
                todo={task}
                index={index}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
