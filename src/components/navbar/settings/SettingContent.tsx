import { useState,ChangeEvent } from "react";

{
  /* <input min="1" max="100" type="number" value="1"></input> */
}
const SettingContent = () => {
  const[pomodoroTime,setPomodoroTime]=useState<number>(1);
  const handleChange= (e: ChangeEvent<HTMLInputElement>) => {
    setPomodoroTime(parseInt(e.target.value,10));
  };
  return (
    <div>
      <header className="h-8 border-b-2 flex justify-center">SETTING</header>
      <h2 className="h-8 mt-4">TIMER</h2>
      <h2 className="">Time(minutes)</h2>
      <div className="flex flex-row justify-start space-x-12 w-full">
        <div>
          <h3>Pomodoro</h3>
          <input className="bg-slate-300 p-2 rounded-md" min="1" max="100" type="number" value={pomodoroTime} onChange={handleChange}></input>
        </div>
        <div>
          <h3>Short Break</h3>
          <input min="1" max="100" type="number" value="1"></input>
        </div>
        <div>
          <h3>Long Break</h3>
          <input min="1" max="100" type="number" value="1"></input>
        </div>
      </div>
    </div>
  );
};

export default SettingContent;
