import React, { useState, useRef } from "react";
import { Button } from "./ui/button";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [savedTimes, setSavedTimes] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")} . ${milliseconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    setSavedTimes([]); // Usuwamy zapisane czasy
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const saveTime = () => {
    const formattedTime = formatTime(time);
    setSavedTimes((prevSavedTimes) => [...prevSavedTimes, formattedTime]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 font-sarabun text-5xl font-medium text-[#7f0102] dark:text-red-400 sm:text-7xl">
        {formatTime(time)}
      </div>
      <div className="flex gap-4">
        <Button onClick={isRunning ? stopTimer : startTimer}>
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button variant="outline" onClick={saveTime}>
          Save
        </Button>
        <Button variant="secondary" onClick={resetTimer}>
          Reset
        </Button>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-medium">Saved Times:</h3>
        <ul className="text-center">
          {savedTimes.map((savedTime, index) => (
            <li key={index}>
              {index + 1}. {savedTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
