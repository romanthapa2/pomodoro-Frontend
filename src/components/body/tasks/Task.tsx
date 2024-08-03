import { AlertDialogDemo } from "./AlertDialog";
import { useSelector } from "react-redux";
import { selectPomoTask } from "@/reduxstore/TaskSlice";
import TaskCard from "./TaskCard";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { clearTask } from "@/reduxstore/TaskSlice";
import { useAppDispatch } from "@/reduxstore/AppHooks";

interface Task {
  text: string;
  no: number;
}

const Task: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClearTask = () => {
    dispatch(clearTask());
  };
  const pomoTask = useSelector(selectPomoTask) as Task[];
  return (
    <>
      <div className="h-full w-full flex flex-col justify-start items-center mt-8 ">
        <div className="flex flex-row items-center justify-between w-[35%] ">
          <div className="mb-5 mt-5 text-white">Tasks</div>
          <PiDotsThreeOutlineVerticalThin
            onClick={handleClearTask}
            className="bg-slate-300 text-xl p-2 h-10 w-8"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          {pomoTask.map((task, index) => (
            <TaskCard task={task} key={index} index={index} />
          ))}
        </div>
        <AlertDialogDemo className="w-[40%] p-7 my-6" button="ADD Task" />
      </div>
    </>
  );
};

export default Task;
