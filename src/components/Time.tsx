import { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

export const Time = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Loading delay for 1 seconds
    const timerId = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      {loaded && <div>{currentTime}</div>}
      {!loaded && (
        <Skeleton className="mt-[4px] h-[28px] w-[80px] rounded-full" />
      )}
    </div>
  );
};
