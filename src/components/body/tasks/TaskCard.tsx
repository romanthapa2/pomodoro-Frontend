import { AlertDialogDemo } from "./AlertDialog";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

interface Task {
  text: string;
  no: number;
}

interface taskCardProp {
  task: Task;
}

const TaskCard: React.FC<taskCardProp> = ({ task }) => {
  return (
    <div className="flex my-1 text-white w-[40%] bg-gray-700 items-center justify-between h-14 px-7 rounded-md">
      <h3 className="">{task.text}</h3>
      <div className="flex justify-center items-center gap-5">
        <h3 className="">{task.no}</h3>
        <AlertDialogDemo className="bg-inherit hover:bg-transparent p-2 " text={<PiDotsThreeOutlineVerticalThin />} />
      </div>
    </div>
  );
};

export default TaskCard;
