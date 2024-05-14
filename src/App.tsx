import { HashRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import { HomePage } from "./pages/HomePage";
import { PomodoroPage } from "./pages/PomodoroPage";
import { TimerPage } from "./pages/TimerPage";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
        <Route path="timer" element={<TimerPage />} />
      </Routes>
    </HashRouter>
  );
};
