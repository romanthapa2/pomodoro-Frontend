import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPomodoroTime, selectLongBreak, selectShortBreak } from "../../../reduxstore/TimeSlice";
import useTimer from "./useTimer"; 
const Timer: React.FC = () => {
  const pomodoroTime = useSelector(selectPomodoroTime);
  const shortBreakTime = useSelector(selectShortBreak);
  const longBreakTime = useSelector(selectLongBreak);

  const { time, status, startPauseTimer, resetTimer } = useTimer(pomodoroTime);

  const [activeButton, setActiveButton] = useState<"Pomodoro" | "Short Break" | "Long Break">("Pomodoro");

  useEffect(() => {
    const newTime =
      activeButton === "Pomodoro"
        ? pomodoroTime
        : activeButton === "Short Break"
        ? shortBreakTime
        : longBreakTime;
    resetTimer(newTime);
  }, [pomodoroTime, shortBreakTime, longBreakTime, activeButton]);

  const handleButtonClick = (type: "Pomodoro" | "Short Break" | "Long Break", time: number) => {
    resetTimer(time);
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
            onClick={startPauseTimer}
            className="px-4 py-3 text-gray-700 bg-white h-16 w-48 text-3xl rounded-lg">
            {status === "Pause" ? "START" : "PAUSE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
