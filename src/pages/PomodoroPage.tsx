import { Navbar } from "../components/Navbar";
import { Pomodoro } from "../components/Pomodoro";

export const PomodoroPage = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Pomodoro />
      </main>
    </div>
  );
};
