import { useEffect } from "react";
import { toggleTheme } from "./utils/toggleTheme";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import { Home } from "./pages/Home";
import { NotePage } from "./pages/NotesPage";
import { PomodoroPage } from "./pages/PomodoroPage";
import { TimerPage } from "./pages/TimerPage";

export const App = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");

    if (isDarkMode) {
      document.documentElement.classList.toggle("dark", JSON.parse(isDarkMode));
      document.body.classList.toggle("bg-[#181a1b]", JSON.parse(isDarkMode));
      toggleTheme();
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="notes" element={<NotePage />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
        <Route path="timer" element={<TimerPage />} />
      </Routes>
    </HashRouter>
  );
};
