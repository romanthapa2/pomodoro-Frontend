import { useState } from "react";
import { AlertDialogAction, AlertDialogCancel, AlertDialogFooter } from "@/components/ui/alert-dialog";

const AlertContent = () => {
  const [no, setNo] = useState<number>(1);
  const handleIncrease = () => {
    setNo(no + 1);
  };
  const handleDecrease = () => {
    setNo(no - 1);
  };

  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = ()=>{
      
  }

  return (
    <>
      <input
        className="focus:outline-none focus:border-none text-2xl"
        type="text"
        autoFocus
        onChange={onChange}
        placeholder="What are you working on?"
      />
      <h2 className="font-medium">Estimated Pomodoros</h2>
      <div className="">
        <input
          className="bg-slate-300  px-2 py-1 text-lg rounded"
          min="1"
          max="20"
          value={no}
          type="number"></input>
        <button className="mx-4 border px-2 py-1 text-lg rounded" onClick={handleIncrease}>
          up
        </button>
        <button className="border px-2 py-1 text-lg rounded" onClick={handleDecrease}>
          down
        </button>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
};

export default AlertContent;
