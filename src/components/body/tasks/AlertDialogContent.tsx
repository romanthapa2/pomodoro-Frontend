import { useState,useEffect } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAppDispatch } from "@/reduxstore/AppHooks";
import { addPomoTask,updateTask } from "@/reduxstore/TaskSlice";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { deleteTask } from "@/reduxstore/TaskSlice";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface props {
  button: ReactNode;
  index?: number;
  initialTask?: taskType;
  onClose: () => void;
}
interface taskType {
  setTaskNo : number;
  text: string;
  completedTaskNo: number;
}

// when i click the add or edit button this component will show up
const AlertDialogContent = ({ button, index, initialTask,onClose }: props) => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<taskType>({ setTaskNo: 1, text: "",completedTaskNo: 0 });


  useEffect(() => {
    if (initialTask) {
      setTask(initialTask);
    }
  }, [initialTask]);


  const handleIncrease = () => {
    setTask((prevTask) => ({ ...prevTask, setTaskNo: prevTask.setTaskNo + 1 }));
  };
  const handleDecrease = () => {
    if (task.setTaskNo >= 2) {
      setTask((prevTask) => ({ ...prevTask, setTaskNo: prevTask.setTaskNo - 1 }));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({ ...prevTask, text: e.target.value }));
  };

  const handleSubmit = async () => {
    if (task.text.length >= 2) {
      if (index !== undefined) {
        dispatch(updateTask({ index, task }));
      } else {
        dispatch(addPomoTask(task));
      }
    }
  };

  const handleDeleteTask = () => {
    if (index !== undefined) {
      dispatch(deleteTask(index));
      onClose();
    }
  };

  return (
    <>
      {/* if not having title and description it throws error so i am putting this two line of code */}
      <VisuallyHidden>
        <AlertDialogTitle>Dialog Title</AlertDialogTitle>
        <AlertDialogDescription>Description of the dialog content</AlertDialogDescription>
      </VisuallyHidden>
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
        <h3 className="bg-slate-300 w-20 px-2 py-1 text-lg rounded">{task.setTaskNo}</h3>

        <button className="mx-4 border px-2 py-1 text-lg rounded" onClick={handleIncrease}>
          up
        </button>
        <button className="border px-2 py-1 text-lg rounded" onClick={handleDecrease}>
          down
        </button>
      </div>
      <AlertDialogFooter>
        {typeof button === "object" && <Button onClick={handleDeleteTask} >Delete</Button>}
        <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
};

export default AlertDialogContent;
