import React, { useEffect, useState,useRef } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSelector } from "react-redux";
import { selectPomodoroTime, selectLongBreak, selectShortBreak } from "../../../reduxstore/TimeSlice";

dayjs.extend(duration);

const Timer: React.FC = () => {
  const selectPomodoro = useSelector(selectPomodoroTime);
  const selectShortB = useSelector(selectShortBreak);
  const selectLongB = useSelector(selectLongBreak);


  const [status, setStatus] = useState<string>("Pause");
  const [activeButton, setActiveButton] = useState<string>("Pomodoro");
  const [endTimeRedux, setEndTimeRedux] = useState<number>(selectPomodoro);
  const [time, setTime] = useState<string>(`${endTimeRedux} : 00`);


  let endTime = useRef(dayjs().add(endTimeRedux, "minutes"));
  const timerId = useRef<number | null>(null);
  const timeLeft = useRef(endTime.current.unix() - dayjs().unix());

// for showing time in the UI
  useEffect(() => {
    const updateTimer = () => {
      let differenceTime = endTime.current.unix() - dayjs().unix();
      if (differenceTime <= 0) {
        clearInterval(timerId.current!);
        setStatus("Pause");
      }
      const duration = dayjs.duration(differenceTime * 1000, "milliseconds");
      const twoDP = (n: number) => (n > 9 ? n : "0" + n);
      const timestamp = `${twoDP(duration.minutes())} : ${twoDP(duration.seconds())}`;
      setTime(timestamp);
    };
    
    if (status === "Start") {
      timerId.current = window.setInterval(updateTimer, 1000);
    } else if (status === "Pause") {
      clearInterval(timerId.current!);
    }

    return () => clearInterval(timerId.current!);
  }, [ status]);


  // handle start and pause event inside 
  const handleStartPause = () => {
    if (status === "Pause") {
      endTime.current = dayjs().add(timeLeft.current, "seconds");
      setStatus("Start");
    } else if (status === "Start") {
      clearInterval(timerId.current!);
      timeLeft.current = endTime.current.unix() - dayjs().unix();
      setStatus("Pause");
    }
  };

  // hadle when i change time in the settings immidate change in UI
  useEffect(() => {
    const newTime = activeButton === "Pomodoro" ? selectPomodoro :
                    activeButton === "Short Break" ? selectShortB : selectLongB;
    setEndTimeRedux(newTime);
    setTime(`${newTime} : 00`);
    endTime.current = dayjs().add(newTime, "minutes");
    timeLeft.current = endTime.current.unix() - dayjs().unix();
  }, [selectPomodoro, selectShortB, selectLongB, activeButton]);


  // altering the pomodoro, short break and long break
  const handleButtonClick = (type: string, time: number) => {
    clearInterval(timerId.current!);
    setEndTimeRedux(time);
    setTime(`${time} : 00`);
    setStatus("Pause");
    setActiveButton(type);
  };

  return (
    <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
      <div className="p-5">
        <div className="flex justify-center items-center h-8 ">
          <button
            onClick={() => handleButtonClick("Pomodoro", selectPomodoro)}
            className={`px-3 py-1  rounded-md ${
              activeButton === "Pomodoro" ? "bg-gray-700" : "bg-gray-500"
            }`}>
            Pomodoro
          </button>
          <button
            onClick={() => handleButtonClick("Short Break", selectShortB)}
            className={`px-3 py-1 rounded-md ${
              activeButton === "Short Break" ? "bg-gray-700" : "bg-gray-500"
            }`}>
            Short Break
          </button>
          <button
            onClick={() => handleButtonClick("Long Break", selectLongB)}
            className={`px-3 py-1 rounded-md ${
              activeButton === "Long Break" ? "bg-gray-700" : "bg-gray-500"
            }`}>
            Long Break
          </button>
        </div>

        {/* time showing div */}
        <div className="flex justify-center items-center h- 32" style={{ fontSize: "6rem" }}>
          {time}
        </div>

        {/* start or pause div */}
        <div className=" h-20 w-full flex justify-center items-center">
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
