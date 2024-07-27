import { AlertDialogDemo } from "./AlertDialog";
import { useSelector } from "react-redux";
import { selectPomoTask } from "@/reduxstore/TaskSlice";
import TaskCard from "./TaskCard";

interface Task {
  text: string;
  no: number; 
}

const Task: React.FC = () => {
  const pomoTask = useSelector(selectPomoTask) as Task[];
  console.log(pomoTask)
  return (
    <>
      <div className="h-full w-full flex flex-col justify-start items-center mt-8 ">
        <div className="mb-5 mt-5 text-white">Tasks</div>
        <div className="w-full flex flex-col items-center justify-center">
          {pomoTask.map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
        </div>
        <AlertDialogDemo />
      </div>
    </>
  );
};

export default Task;
