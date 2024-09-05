import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectPomodoroTime,
  selectLongBreak,
  selectShortBreak,
} from "../../../reduxstore/TimeSlice";
import useTimer from "./useTimer";
import { Button } from "@/components/ui/button";

// Define constants for Timer Labels
const TIMER_LABELS = ["Pomodoro", "Short Break", "Long Break"] as const;

const Timer: React.FC = () => {
  // Get times from Redux
  const pomodoroTime = useSelector(selectPomodoroTime);
  const shortBreakTime = useSelector(selectShortBreak);
  const longBreakTime = useSelector(selectLongBreak);

  // Map of time values corresponding to the labels
  const timeValues = {
    "Pomodoro": pomodoroTime,
    "Short Break": shortBreakTime,
    "Long Break": longBreakTime,
  };

  // State to track the active timer mode (Pomodoro, Short Break, Long Break)
  const [activeButton, setActiveButton] = useState<keyof typeof timeValues>("Pomodoro");

  // Timer hook, reset it whenever the active mode or time value changes
  const { time, status, startPauseTimer, resetTimer } = useTimer(timeValues[activeButton], handleTimerEnd);

  // This function will handle switching to the Short Break after Pomodoro ends
  function handleTimerEnd() {
    if (activeButton === "Pomodoro") {
      setActiveButton("Short Break");
      resetTimer(timeValues["Short Break"]);
    }
  }

  // Reset the timer every time the activeButton or time values change
  useEffect(() => {
    resetTimer(timeValues[activeButton]);
  }, [activeButton,resetTimer]);

  // Handle button click to switch between timer modes
  const handleButtonClick = (label: keyof typeof timeValues) => {
    setActiveButton(label);
    resetTimer(timeValues[label]);
  };

  return (
    <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
      <div className="p-5">
        {/* Timer Mode Buttons */}
        <div className="flex justify-center items-center h-10 space-x-2">
          {TIMER_LABELS.map((label) => (
            <Button
              key={label}
              onClick={() => handleButtonClick(label)}
              className={`h-8 w-25 rounded-md ${
                activeButton === label ? "bg-gray-700" : "bg-gray-500"
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Timer Display */}
        <div
          className="flex justify-center items-center h-32 font-semibold"
          style={{ fontSize: "7rem" }}
        >
          {time}
        </div>

        {/* Start/Pause Button */}
        <div className="h-20 w-full flex justify-center items-center">
          <button
            onClick={startPauseTimer}
            className="px-4 py-3 text-gray-700 bg-white h-16 w-48 text-3xl rounded-lg"
          >
            {status === "Pause" ? "START" : "PAUSE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
