import { AlertDialogDemo } from "./AlertDialog";
import { useSelector } from "react-redux";
import { selectPomoTask,clearTask } from "@/reduxstore/TaskSlice";
import type { Task } from "@/reduxstore/TaskSlice";
import TaskCard from "./TaskCard";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { useAppDispatch } from "@/reduxstore/AppHooks";
import { useState } from "react";

const Task: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClearTask = () => {
    dispatch(clearTask());
  };
  
  const pomoTask = useSelector(selectPomoTask) as Task[];
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const handleTaskClick = (index: number) => {
    setSelectedTaskIndex(index);
  };

  return (
    <>
      <div className=" h-full mx-2 md:mx-[30%] flex flex-col justify-start items-center mt-8 px-3">
        <div className="flex flex-row w-full items-center justify-between  ">
          <div className="mb-5 mt-5 text-white text-xl">Tasks</div>
          <PiDotsThreeOutlineVerticalThin
            onClick={handleClearTask}
            className="bg-slate-300 text-xl p-2 h-10 w-8 rounded-md"
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          {pomoTask.map((task, index) => (
            <TaskCard
              task={task}
              index={index}
              isSelected={index === selectedTaskIndex}
              onClick={() => handleTaskClick(index)}
            />
          ))}
        </div>
        <AlertDialogDemo
          className="w-full h-14 my-6 bg-white rounded-lg"
          button="ADD Task"
        />
      </div>
    </>
  );
};

export default Task;
