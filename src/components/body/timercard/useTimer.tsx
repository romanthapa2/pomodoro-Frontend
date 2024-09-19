import { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import createTask from "./postFunctionCall";
import { useSelector } from "react-redux";
import type { Task } from "@/reduxstore/TaskSlice";
import {
  selectSelectedTaskindex,
  selectPomoTask,
} from "@/reduxstore/TaskSlice";
import { updateTask } from "@/reduxstore/TaskSlice";
import { useAppDispatch } from "@/reduxstore/AppHooks";

dayjs.extend(duration);

const useTimer = (initialTime: number, onTimerEnd?: () => void) => {
  const dispatch = useAppDispatch();
  const pomoTask = useSelector(selectPomoTask) as Task[];
  const selectedTaskindex = useSelector(selectSelectedTaskindex);

  const [status, setStatus] = useState<"Start" | "Pause">("Pause");
  const [time, setTime] = useState<string>(`${initialTime}:00`);

  const endTime = useRef(dayjs().add(initialTime, "minutes"));
  const timerId = useRef<number | null>(null);
  const timeLeft = useRef(endTime.current.unix() - dayjs().unix());
  const pauseStartTime = useRef<dayjs.Dayjs | null>(null);
  const totalPauseTime = useRef(0);

  const twoDP = (n: number) => (n > 9 ? n.toString() : `0${n}`);

  const updateTimer = () => {
    const differenceTime = endTime.current.unix() - dayjs().unix();
    if (differenceTime <= 0) {
      clearInterval(timerId.current!);
      setStatus("Pause");
      if (selectedTaskindex !== null && pomoTask[selectedTaskindex]) {
        const updatedTask = {
          ...pomoTask[selectedTaskindex],
          completedTaskNo:
            (pomoTask[selectedTaskindex].completedTaskNo || 0) + 1,
        };
        dispatch(updateTask({ index: selectedTaskindex, task: updatedTask }));
      }
      createTask({
        task: pomoTask[selectedTaskindex ?? 0].text,
        total_minutes: initialTime,
      });
      if (onTimerEnd) {
        onTimerEnd();
      }
      return;
    }

    const remainingDuration = dayjs.duration(
      differenceTime * 1000,
      "milliseconds"
    );
    setTime(
      `${twoDP(remainingDuration.minutes())}:${twoDP(
        remainingDuration.seconds()
      )}`
    );
  };

  const startPauseTimer = () => {
    if (status === "Start") {
      timeLeft.current = endTime.current.unix() - dayjs().unix();
      setStatus("Pause");
    } else {
      endTime.current = dayjs().add(timeLeft.current, "seconds");
      setStatus("Start");
    }
  };

  // calculate total pause time and run updatetimer on start
  useEffect(() => {
    if (status === "Start") {
      if (pauseStartTime.current) {
        totalPauseTime.current +=
          dayjs().unix() - pauseStartTime.current.unix();
        pauseStartTime.current = null;
      }
      timerId.current = window.setInterval(updateTimer, 1000);
    } else {
      clearInterval(timerId.current!);
      pauseStartTime.current = dayjs();
    }

    return () => clearInterval(timerId.current!);
  }, [status]);

  const resetTimer = (newTime: number) => {
    clearInterval(timerId.current!);
    setTime(`${newTime}:00`);
    setStatus("Pause");
    endTime.current = dayjs().add(newTime, "minutes");
    timeLeft.current = endTime.current.unix() - dayjs().unix();
    totalPauseTime.current = 0; // Reset pause time
    pauseStartTime.current = null; // Clear any existing pause time
  };

  useEffect(() => {
    document.title = `${time} - Time to focus`;
  }, [time]);

  return {
    time,
    status,
    startPauseTimer,
    resetTimer,
  };
};

export default useTimer;
