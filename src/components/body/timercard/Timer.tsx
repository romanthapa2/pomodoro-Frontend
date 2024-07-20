import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSelector } from "react-redux";
import { selectPomodoroTime,selectLongBreak,selectShortBreak } from "../../../reduxstore/TimeSlice";

dayjs.extend(duration);

const Timer: React.FC = () => {
  const [status, setStatus] = useState<string>("Pause");
    let selectPomodoro = useSelector(selectPomodoroTime);
    const selectShortB = useSelector(selectShortBreak);
    const selectLongB = useSelector(selectLongBreak);
  const [endTimeRedux, setEndTimeRedux] = useState<number>(selectPomodoro);


  let endTime = React.useRef(dayjs().add(endTimeRedux, "minutes"));
  console.log(endTime); 
  const [time, setTime] = useState<string>(`${endTimeRedux} : 00`);
  const timerId = React.useRef<number | null>(null);
  const timeLeft = React.useRef(endTime.current.unix() - dayjs().unix());

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

  useEffect(() => {
    if (status === "Start") {
      timerId.current = window.setInterval(updateTimer, 1000);
    } else if (status === "Pause") {
      clearInterval(timerId.current!);
    }

    return () => clearInterval(timerId.current!);
  }, [endTimeRedux, status]);


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

  const handlePomodoro = () => {
    clearInterval(timerId.current!);
    setEndTimeRedux(selectPomodoro);
    setTime(`${selectPomodoro} : 00`);
    setStatus("Pause");
  };

  const handleShortBreak = () => {
    clearInterval(timerId.current!);
    setEndTimeRedux(selectShortB);
    setTime(`${selectShortB} : 00`);
    setStatus("Pause");
  };

  const handleLongBreak = () => {
    clearInterval(timerId.current!);
    setEndTimeRedux(selectLongB);
    setTime(`${selectLongB} : 00`);
    setStatus("Pause");
  };



  return (
    <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
      <div className="p-5">
        <div className="flex justify-center items-center h-8 ">
          <button onClick={handlePomodoro} className="px-3 py-1 bg-slate-700 rounded-md">Pomodoro</button>
          <button onClick={handleShortBreak} className="px-3 py-1 bg-green-300 rounded-md">Short Break</button>
          <button onClick={handleLongBreak} className="px-3 py-1 bg-green-300 rounded-md">Long Break</button>
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
