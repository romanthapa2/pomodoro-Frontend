
import { AlertDialogDemo } from "./AlertDialog";

interface Task{
  text: string;
  no: number;
}

interface taskCardProp{
  task:Task
}


const TaskCard:React.FC<taskCardProp> = ({task}) => {
  return (
    <div className="flex my-1 text-white w-[40%] bg-gray-700 items-center justify-between h-14 px-7 rounded-md" >
      <h3 className="">
          {task.text}
      </h3>
      <div className="flex justify-center items-center gap-5">
      <h3 className="">
      {task.no}
      </h3>
      {/* <button onClick={handleTaskEdit} className="bg-gray-600 flex flex-row items-center rounded-md  p-2 "> */}
      <AlertDialogDemo />
        {/* </button> */}
        </div>
    </div>
  )
}

export default TaskCard