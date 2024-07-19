import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSelector } from "react-redux";
import { selectPomodoroTime } from "../../../reduxstore/TimeSlice";

dayjs.extend(duration);


const Timer: React.FC = () => {
  const [status, setstatus] = useState<string>("Pause");
  const endtime = useSelector(selectPomodoroTime);
  let endTime = React.useRef(dayjs().add(endtime, "minutes"));
  const [time, setTime] = useState<string | number >();
  const timerId = React.useRef<number | null>(null);
  let remainingTime: number;
  const timeLeft = React.useRef(endTime.current.unix() - dayjs().unix());

  const updateTimer = () => {
    const currentTime = dayjs();
    remainingTime = endTime.current.unix() - currentTime.unix();
    if (remainingTime <= 0) {
      clearInterval(timerId.current!); // Add non-null assertion
      setstatus("Pause");
      setTime(0);
    } else {
      setTime(remainingTime);
    }
    const duration = dayjs.duration(remainingTime * 1000, "milliseconds");
    const twoDP = (n: number) => (n > 9 ? n : "0" + n);
    const timestamp = `${twoDP(duration.minutes())} : ${twoDP(duration.seconds())}`;
    setTime(timestamp);
  };

  const handleStartPause = () => {
    if (status === "Pause") {
      endTime.current = dayjs().add(timeLeft.current, "seconds");
      setstatus("Start");
    } else if (status === "Start") {
      clearInterval(timerId.current!); // Add non-null assertion
      timeLeft.current = endTime.current.unix() - dayjs().unix();
      setstatus("Pause");
    }
  };

  // const handleReset = () => {
  //   clearInterval(timerId.current!); // Add non-null assertion
  //   setTime(60); // Reset to initial time
  //   timeLeft.current = 60;
  //   endTimeSeconds.current = dayjs().unix() + 60;
  //   setStatus("Pause");
  // };

  useEffect(() => {
    if (status === "Start") {
      timerId.current = window.setInterval(updateTimer, 1000);
    } else if (status === "Pause") {
      clearInterval(timerId.current!); 
    }

    return () => clearInterval(timerId.current!); 
  }, [endtime, status]);

  return (
    <div className="text-white bg-gray-500 h-fit mx-2 mt-10 md:mx-[30%] rounded-md">
      <div className="p-5">
        <div className="flex justify-center items-center h-8 ">
          <button className="px-3 py-1 bg-slate-700 rounded-md">Pomodoro</button>
          <button className="px-3 py-1 bg-slate-700 rounded-md">Short Break</button>
          <button className="px-3 py-1 bg-slate-700 rounded-md">Long Break</button>
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
