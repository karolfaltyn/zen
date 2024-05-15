import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Timer } from "../components/Timer";
import { Stopwatch } from "../components/Stopwatch";
import { Button } from "../components/Button";

export const TimerStopwatchPage = () => {
  const [componentSwitch, setComponentSwitch] = useState<boolean>(true);

  const toggleComponent = (change: boolean) => {
    setComponentSwitch(change);
  };

  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <Button
              onClick={() => toggleComponent(true)}
              active={componentSwitch}
            >
              Timer
            </Button>
            <Button
              onClick={() => toggleComponent(false)}
              active={!componentSwitch}
            >
              Stopwatch
            </Button>
          </div>
          {componentSwitch ? <Timer /> : <Stopwatch />}
        </div>
      </main>
    </div>
  );
};
