import { useState,ChangeEvent } from "react";
import {setPomodoro,setLongBreak,setShortBreak} from "../../../reduxstore/TimeSlice"
import { useAppDispatch } from "@/reduxstore/AppHooks";
import { useSelector } from "react-redux";
import { selectPomodoroTime, selectLongBreak, selectShortBreak } from "../../../reduxstore/TimeSlice";
import SoundSettingContent from "./SoundSettingContent"


const SettingContent = () => {
  const dispatch = useAppDispatch();
  const selectPomodoro = useSelector(selectPomodoroTime);
  const selectShortB = useSelector(selectShortBreak);
  const selectLongB = useSelector(selectLongBreak);
  const [pomodoroTime, setPomodoroTime] = useState<number>(selectPomodoro);
  const [shortBreakTime, setShortBreakTime] = useState<number>(selectShortB);
  const [longBreakTime, setLongBreakTime] = useState<number>(selectLongB);

  const handlePomodoroChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setPomodoroTime(value);
    dispatch(setPomodoro(value));
  };

  const handleShortBreakChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setShortBreakTime(value);
    dispatch(setShortBreak(value));
  };

  const handleLongBreakChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setLongBreakTime(value);
    dispatch(setLongBreak(value));
  };

  
  return (
    <>
    <div>
      <header className="h-8 border-b-2 flex justify-center">SETTING</header>
      <h2 className="h-8 mt-4">TIMER</h2>
      <h2 className="">Time(minutes)</h2>
      <div className="flex flex-row justify-start space-x-12 w-full">
        <div>
          <h3>Pomodoro</h3>
          <input className="bg-slate-300 p-2 rounded-md" min="1" max="100" type="number" value={pomodoroTime} onChange={handlePomodoroChange}></input>
        </div>
        <div>
          <h3>Short Break</h3>
          <input className="bg-slate-300 p-2 rounded-md" min="1" max="100" type="number" value={shortBreakTime}
          onChange={handleShortBreakChange}
          ></input>
        </div>
        <div>
          <h3>Long Break</h3>
          <input className="bg-slate-300 p-2 rounded-md" min="1" max="100" type="number" value={longBreakTime}
          onChange={handleLongBreakChange}
          ></input>
        </div>
      </div>
    </div>
    <SoundSettingContent/>
    </>
  );
};

export default SettingContent;
