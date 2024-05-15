import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Timer } from "../components/Timer";
import { Stopwatch } from "../components/Stopwatch";

export const TimerPage = () => {
  const [componentSwitch, setComponentSwitch] = useState<boolean>(true);

  const toggleComponent = (change: boolean) => {
    setComponentSwitch(change);
  };

  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="flex flex-col items-center">
          <h1 className="flex gap-4">
            <Link
              to="/timer"
              onClick={() => toggleComponent(true)}
              active={componentSwitch}
            >
              Timer
            </Link>
            <Link
              to="/stopwatch"
              onClick={() => toggleComponent(false)}
              active={!componentSwitch}
            >
              Stopwatch
            </Link>
          </h1>
          {componentSwitch ? <Timer /> : <Stopwatch />}
        </div>
      </main>
    </div>
  );
};
