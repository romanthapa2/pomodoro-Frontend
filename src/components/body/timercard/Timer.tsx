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

  const buttonConfigs = [
    { label: "Pomodoro", time: pomodoroTime },
    { label: "Short Break", time: shortBreakTime },
    { label: "Long Break", time: longBreakTime },
  ] as const;

  useEffect(() => {
    const activeConfig = buttonConfigs.find((config) => config.label === activeButton);
    resetTimer(activeConfig?.time ?? pomodoroTime);
  }, [pomodoroTime, shortBreakTime, longBreakTime, activeButton]);

  const handleButtonClick = (label: "Pomodoro" | "Short Break" | "Long Break", time: number) => {
    setActiveButton(label);
    resetTimer(time);
  };

  return (
    <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
      <div className="p-5">
        <div className="flex justify-center items-center h-8">
          {buttonConfigs.map((config) => (
            <button
              key={config.label}
              onClick={() => handleButtonClick(config.label, config.time)}
              className={`px-3 py-1 rounded-md ${
                activeButton === config.label ? "bg-gray-700" : "bg-gray-500"
              }`}>
              {config.label}
            </button>
          ))}
        </div>

        <div className="flex justify-center items-center h-32 font-semibold" style={{ fontSize: "7rem" }}>
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
