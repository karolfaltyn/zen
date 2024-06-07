import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import { Home } from "./pages/Home";
import { TodoListPage } from "./pages/TodoListPage";
import { NotePage } from "./pages/NotesPage";
import { PomodoroPage } from "./pages/PomodoroPage";
import { TimerPage } from "./pages/TimerPage";
import { ErrorPage } from "./pages/ErrorPage";

export const App = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");

    if (isDarkMode !== null) {
      const parsedIsDarkMode = JSON.parse(isDarkMode);

      document.documentElement.classList.toggle("dark", parsedIsDarkMode);
      document.body.classList.toggle("bg-[#181a1b]", parsedIsDarkMode);
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="todo" element={<TodoListPage />} />
        <Route path="notes" element={<NotePage />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
        <Route path="timer" element={<TimerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};
