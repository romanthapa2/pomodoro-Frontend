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
      <header className="h-8 border-b-2 flex justify-center font-bold">SETTING</header>
      <h2 className="h-8 mt-4 font-bold text-slate-500 text-lg">TIMER</h2>
      <h2 className="text-lg font-semibold">Time(minutes)</h2>
      <div className="flex flex-row justify-start space-x-12 w-full">
        <div>
          <h3 className="text-slate-500">Pomodoro</h3>
          <input className="bg-slate-300 p-2 rounded-md" min="1" max="100" type="number" value={pomodoroTime} onChange={handlePomodoroChange}></input>
        </div>
        <div>
          <h3 className="text-slate-500">Short Break</h3>
          <input className="bg-slate-300 p-2 rounded-md" min="1" max="100" type="number" value={shortBreakTime}
          onChange={handleShortBreakChange}
          ></input>
        </div>
        <div>
          <h3 className="text-slate-500">Long Break</h3>
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
