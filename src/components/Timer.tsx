import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const Timer = () => {
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const audioRef = React.createRef<HTMLAudioElement>();

  // Event handlers to update hours, minutes, and seconds
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    value = isNaN(value) ? 0 : Math.min(Math.max(0, value), 60);
    setHours(value.toString().padStart(2, "0"));
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    value = isNaN(value) ? 0 : Math.min(Math.max(0, value), 60);
    setMinutes(value.toString().padStart(2, "0"));
  };

  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    value = isNaN(value) ? 0 : Math.min(Math.max(0, value), 60);
    setSeconds(value.toString().padStart(2, "0"));
  };

  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  const resetTimer = () => {
    setHours("00");
    setMinutes("00");
    setSeconds("00");
    setTimerRunning(false);
  };

  useEffect(() => {
    let totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    if (timerRunning && totalSeconds === 0) {
      // Play notification sound when countdown completes
      if (audioRef.current) {
        audioRef.current.play();
      }
      setTimerRunning(false);
      return;
    }

    const timer = setInterval(() => {
      if (timerRunning && totalSeconds > 0) {
        totalSeconds--;
        const updatedHours = Math.floor(totalSeconds / 3600);
        const updatedMinutes = Math.floor((totalSeconds % 3600) / 60);
        const updatedSeconds = totalSeconds % 60;
        setHours(updatedHours.toString().padStart(2, "0"));
        setMinutes(updatedMinutes.toString().padStart(2, "0"));
        setSeconds(updatedSeconds.toString().padStart(2, "0"));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRunning, hours, minutes, seconds, audioRef]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 font-sarabun text-2xl font-medium text-[#444] dark:text-[#fafafa]">
        Timer
      </h1>
      <div className="mb-8 font-sarabun text-5xl font-medium text-[#7f0102] dark:text-red-400 sm:text-7xl">
        <input
          type="number"
          value={hours}
          onChange={handleHourChange}
          className="w-16 bg-[#ffffff] dark:bg-[#181a1b] sm:w-24"
          disabled={timerRunning}
        />
        :{" "}
        <input
          type="number"
          value={minutes}
          onChange={handleMinuteChange}
          className="w-16 bg-[#ffffff] dark:bg-[#181a1b] sm:w-24"
          disabled={timerRunning}
        />
        :{" "}
        <input
          type="number"
          value={seconds}
          onChange={handleSecondChange}
          className="w-16 bg-[#ffffff] dark:bg-[#181a1b] sm:w-24"
          disabled={timerRunning}
        />
      </div>
      <div className="flex gap-4">
        <Button onClick={toggleTimer}>
          {timerRunning ? "Pause" : "Start"}
        </Button>
        <Button variant="secondary" onClick={resetTimer}>
          Reset
        </Button>
      </div>
      <audio ref={audioRef}>
        <source src="/assets/times-out.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};
