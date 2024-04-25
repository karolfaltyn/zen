import { Navbar } from "../components/Navbar";
import { PomodoroTimer } from "../components/PomodoroTimer";

export const Pomodoro = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <PomodoroTimer />
      </main>
    </div>
  );
};
