import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const audioRef = React.createRef<HTMLAudioElement>();

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setHours(isNaN(value) ? 0 : value);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMinutes(isNaN(value) ? 0 : value);
  };

  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSeconds(isNaN(value) ? 0 : value);
  };

  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (timerRunning && totalSeconds === 0) {
      if (audioRef.current) {
        audioRef.current.play();
      }
      resetTimer();
      return;
    }

    const timer = setInterval(() => {
      if (timerRunning && totalSeconds > 0) {
        totalSeconds--;
        const updatedHours = Math.floor(totalSeconds / 3600);
        const updatedMinutes = Math.floor((totalSeconds % 3600) / 60);
        const updatedSeconds = totalSeconds % 60;
        setHours(updatedHours);
        setMinutes(updatedMinutes);
        setSeconds(updatedSeconds);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRunning, hours, minutes, seconds, audioRef]);

  return ( //TODO: create ui 
    <div>
      <div>
        <label>Hours:</label>
        <input type="number" value={hours} onChange={handleHourChange} />
      </div>
      <div>
        <label>Minutes:</label>
        <input type="number" value={minutes} onChange={handleMinuteChange} />
      </div>
      <div>
        <label>Seconds:</label>
        <input type="number" value={seconds} onChange={handleSecondChange} />
      </div>
      <div>
        <button onClick={toggleTimer}>
          {timerRunning ? "Pause Timer" : "Start Timer"}
        </button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
      <div>
        <p>{`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</p>
      </div>
      <audio ref={audioRef}>
        <source src="/public/assets/times-out.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
