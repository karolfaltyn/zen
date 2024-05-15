import { Navbar } from "../components/Navbar";
import { Timer } from "../components/Timer";

export const TimerPage = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Timer />
      </main>
    </div>
  );
};
