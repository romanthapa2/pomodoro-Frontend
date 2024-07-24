import { useState } from "react";
import { AlertDialogAction, AlertDialogCancel, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { useAppDispatch } from "@/reduxstore/AppHooks";
import { addPomoTask, addPomoTime } from "@/reduxstore/TaskSlice";

const AlertContent = () => {
  const dispatch = useAppDispatch(); 
  const [no, setNo] = useState<number>(1);
  const handleIncrease = () => {
    setNo(no + 1);
  };
  const handleDecrease = () => {
    if (no>=2){
      setNo(no - 1);
    }
  };

  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addPomoTask(text));
    dispatch(addPomoTime(no));
  };

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
      <div className="flex flex-row">
        <h3 className="bg-slate-300 w-20 px-2 py-1 text-lg rounded">{no}</h3>

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
