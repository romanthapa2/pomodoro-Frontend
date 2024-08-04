import { useState } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAppDispatch } from "@/reduxstore/AppHooks";
import { addPomoTask } from "@/reduxstore/TaskSlice";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { deleteTask } from "@/reduxstore/TaskSlice";

interface props {
  button: ReactNode;
  index?: number;
}
interface taskType {
  no: number;
  text: string;
}

// when i click the add or edit button this component will show up
const AlertContent = ({ button, index }: props) => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<taskType>({ no: 1, text: "" });

  const handleIncrease = () => {
    setTask((prevTask) => ({ ...prevTask, no: prevTask.no + 1 }));
  };
  const handleDecrease = () => {
    if (task.no >= 2) {
      setTask((prevTask) => ({ ...prevTask, no: prevTask.no - 1 }));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({ ...prevTask, text: e.target.value }));
  };

  const handleSubmit = async () => {
    if (task.text.length >= 2) {
      dispatch(addPomoTask(task));
    }
  };

  const handleDeleteTask = () => {
    if (index !== undefined) {
      dispatch(deleteTask(index));
    }
  };

  return (
    <>
      {/* if not having title and description it throws error so i am putting this two line of code */}
      <AlertDialogTitle className="hidden">feff</AlertDialogTitle>
      <AlertDialogDescription className="hidden">feofe</AlertDialogDescription>
      <input
        className="focus:outline-none focus:border-none text-2xl"
        type="text"
        autoFocus
        onChange={onChange}
        value={task.text}
        placeholder="What are you working on?"
      />
      <h2 className="font-medium">Estimated Pomodoros</h2>
      <div className="flex flex-row">
        <h3 className="bg-slate-300 w-20 px-2 py-1 text-lg rounded">{task.no}</h3>

        <button className="mx-4 border px-2 py-1 text-lg rounded" onClick={handleIncrease}>
          up
        </button>
        <button className="border px-2 py-1 text-lg rounded" onClick={handleDecrease}>
          down
        </button>
      </div>
      <AlertDialogFooter>
        {typeof button === "object" && <Button onClick={handleDeleteTask}>Delete</Button>}
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
};

export default AlertContent;
