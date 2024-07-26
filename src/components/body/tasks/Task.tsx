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
      <div className="h-60 flex flex-col justify-start items-center ">
        <div className="mb-5 mt-5 text-white">Tasks</div>
        <div>
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
