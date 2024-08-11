import React, { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSelector } from "react-redux";
import { selectPomodoroTime, selectLongBreak, selectShortBreak } from "../../../reduxstore/TimeSlice";

dayjs.extend(duration);

const Timer: React.FC = () => {
  const pomodoroTime = useSelector(selectPomodoroTime);
  const shortBreakTime = useSelector(selectShortBreak);
  const longBreakTime = useSelector(selectLongBreak);

  const [status, setStatus] = useState<"Start" | "Pause">("Pause");
  const [activeButton, setActiveButton] = useState<"Pomodoro" | "Short Break" | "Long Break">("Pomodoro");
  const [endTimeRedux, setEndTimeRedux] = useState<number>(pomodoroTime);
  const [time, setTime] = useState<string>(`${endTimeRedux} : 00`);

  const endTime = useRef(dayjs().add(endTimeRedux, "minutes"));
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

  const handleStartPause = () => {
    if (status === "Pause") {
      endTime.current = dayjs().add(timeLeft.current, "seconds");
      setStatus("Start");
    } else {
      timeLeft.current = endTime.current.unix() - dayjs().unix();
      setStatus("Pause");
    }
  };

  useEffect(() => {
    const newTime =
      activeButton === "Pomodoro"
        ? pomodoroTime
        : activeButton === "Short Break"
        ? shortBreakTime
        : longBreakTime;
    setEndTimeRedux(newTime);
    setTime(`${newTime} : 00`);
    endTime.current = dayjs().add(newTime, "minutes");
    timeLeft.current = endTime.current.unix() - dayjs().unix();
  }, [pomodoroTime, shortBreakTime, longBreakTime, activeButton]);

  const handleButtonClick = (type: "Pomodoro" | "Short Break" | "Long Break", time: number) => {
    clearInterval(timerId.current!);
    setEndTimeRedux(time);
    setTime(`${time} : 00`);
    setStatus("Pause");
    setActiveButton(type);
  };

  return (
    <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
      <div className="p-5">
        <div className="flex justify-center items-center h-8">
          <button
            onClick={() => handleButtonClick("Pomodoro", pomodoroTime)}
            className={`px-3 py-1 rounded-md ${activeButton === "Pomodoro" ? "bg-gray-700" : "bg-gray-500"}`}>
            Pomodoro
          </button>
          <button
            onClick={() => handleButtonClick("Short Break", shortBreakTime)}
            className={`px-3 py-1 rounded-md ${
              activeButton === "Short Break" ? "bg-gray-700" : "bg-gray-500"
            }`}>
            Short Break
          </button>
          <button
            onClick={() => handleButtonClick("Long Break", longBreakTime)}
            className={`px-3 py-1 rounded-md ${
              activeButton === "Long Break" ? "bg-gray-700" : "bg-gray-500"
            }`}>
            Long Break
          </button>
        </div>

        <div className="flex justify-center items-center h-32" style={{ fontSize: "6rem" }}>
          {time}
        </div>

        <div className="h-20 w-full flex justify-center items-center">
          <button
            onClick={handleStartPause}
            className="px-4 py-3 text-gray-700 bg-white h-16 w-48 text-3xl rounded-lg">
            {status === "Pause" ? "START" : "PAUSE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
