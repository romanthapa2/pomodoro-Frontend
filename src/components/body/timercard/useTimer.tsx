import { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const useTimer = (initialTime: number) => {
  const [status, setStatus] = useState<"Start" | "Pause">("Pause");
  const [time, setTime] = useState<string>(`${initialTime} : 00`);
  
  const endTime = useRef(dayjs().add(initialTime, "minutes"));
  const timerId = useRef<number | null>(null);
  const timeLeft = useRef(endTime.current.unix() - dayjs().unix());

  const twoDP = (n: number) => (n > 9 ? n.toString() : `0${n}`);

  const updateTimer = () => {
    const differenceTime = endTime.current.unix() - dayjs().unix();
    if (differenceTime <= 0) {
      clearInterval(timerId.current!);
      setStatus("Pause");
    }
    const remainingDuration = dayjs.duration(differenceTime * 1000, "milliseconds");
    setTime(`${twoDP(remainingDuration.minutes())} : ${twoDP(remainingDuration.seconds())}`);
  };

  useEffect(() => {
    if (status === "Start") {
      timerId.current = window.setInterval(updateTimer, 1000);
    } else {
      clearInterval(timerId.current!);
    }

    return () => clearInterval(timerId.current!);
  }, [status]);

  const startPauseTimer = () => {
    if (status === "Pause") {
      endTime.current = dayjs().add(timeLeft.current, "seconds");
      setStatus("Start");
    } else {
      timeLeft.current = endTime.current.unix() - dayjs().unix();
      setStatus("Pause");
    }
  };

  const resetTimer = (newTime: number) => {
    clearInterval(timerId.current!);
    setTime(`${newTime} : 00`);
    setStatus("Pause");
    endTime.current = dayjs().add(newTime, "minutes");
    timeLeft.current = endTime.current.unix() - dayjs().unix();
  };

  return {
    time,
    status,
    startPauseTimer,
    resetTimer,
  };
};

export default useTimer;
