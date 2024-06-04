import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const Pomodoro = () => {
  const [sessionCount, setSessionCount] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(25); // Init work time
  const [seconds, setSeconds] = useState<number>(0);
  const [isResting, setIsResting] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [playAlarm, setPlayAlarm] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(timerRef.current!);
          if (isResting) {
            setMinutes(25); // Work time
            setIsResting(false);
          } else {
            if (sessionCount === 3) {
              setMinutes(20); // Long break
              setSessionCount(0);
            } else {
              setMinutes(5); // Short break
              setSessionCount((prevCount) => prevCount + 1);
            }
            setIsResting(true);
          }
          setPlayAlarm(true);
          setIsActive(false);
        } else {
          if (seconds === 0) {
            setSeconds(59);
            setMinutes((prevMinutes) => prevMinutes - 1);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current!);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, minutes, seconds, isResting, sessionCount]);

  useEffect(() => {
    if (playAlarm) {
      if (audioRef.current) {
        audioRef.current.play();
        audioRef.current.onended = () => {
          setPlayAlarm(false);
        };
      }
    }
  }, [playAlarm]);

  const formatTime = (time: number): string =>
    time < 10 ? `0${time}` : `${time}`;

  const handleStartStop = () => {
    if (isActive) {
      setIsActive(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } else {
      setIsActive(true);
      if (playAlarm) {
        setPlayAlarm(false);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setIsResting(false);
    setSessionCount(0);
    setPlayAlarm(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 font-sarabun text-2xl font-medium text-[#444] dark:text-[#fafafa]">
        Pomodoro Timer
      </h1>
      <p className="mb-2 font-sarabun text-5xl font-medium text-[#7f0102] dark:text-red-400 sm:text-7xl">
        {isResting ? "Rest Time" : "Work Time"}
      </p>
      <p className="mb-8 text-3xl font-extralight">
        {formatTime(minutes)}:{formatTime(seconds)}
      </p>
      <audio
        ref={audioRef}
        src="/zen/assets/times-out.mp3" // Times up sound
      />
      <div className="flex gap-4">
        <Button onClick={handleStartStop}>
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
      <div className="mt-8 w-64 sm:w-96">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the Pomodoro Technique?</AccordionTrigger>
            <AccordionContent>
              A time management method developed by Francesco Cirillo in the
              late 1980s. It uses a kitchen timer to break work into intervals,
              typically 25 minutes in length, separated by short breaks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>
              Set your timer for 25 minutes and focus on a single task until the
              timer rings. When your session ends, enjoy a five-minute break.
              After four Pomodoros, take a longer, more restorative 15-30 minute
              break.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Why should I use it?</AccordionTrigger>
            <AccordionContent>
              The Pomodoro Technique essentially trains people to focus on tasks
              better by limiting the length of time they attempt to maintain
              that focus and ensuring restorative breaks from the effort.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
