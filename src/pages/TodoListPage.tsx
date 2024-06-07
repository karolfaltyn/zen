import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { TodoItem } from "../components/TodoItem";
import { Button } from "../components/ui/button";

export const TodoListPage = () => {
  const [todo, setTodo] = useState<{ task: string; done: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);

  useEffect(() => {
    const storedTodo = localStorage.getItem("tasks");
    if (storedTodo && storedTodo !== "[]") {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todo));
  }, [todo]);

  const addTask = () => {
    if (newTodo.trim() && newTodo.length <= 500) {
      setTodo([...todo, { task: newTodo, done: false }]);
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

  const deleteTask = (taskIndex: number) => {
    const updatedTodo = todo.filter((_, index) => index !== taskIndex);
    setTodo(updatedTodo);
    window.location.reload();
  };

  const editTask = (taskIndex: number, newTask: string) => {
    const updatedTodo = todo.map((task, index) =>
      index === taskIndex ? { ...task, task: newTask } : task,
    );
    setTodo(updatedTodo);
  };

  const toggleDone = (taskIndex: number) => {
    const updatedTodo = todo.map((task, index) =>
      index === taskIndex ? { ...task, done: !task.done } : task,
    );
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
          <div className="mb-8 flex flex-col gap-4">
            {todo.map((task, index) => (
              <TodoItem
                key={index}
                todo={task}
                index={index}
                onDelete={deleteTask}
                onEdit={editTask}
                onToggleDone={toggleDone}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
