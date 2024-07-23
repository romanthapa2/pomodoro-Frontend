import {AlertDialogDemo} from "./AlertDialog"

const Task:React.FC = () => {
  return (
    <>
    <div className="h-60 flex flex-col justify-start items-center ">
      <div className="mb-5 mt-5 text-white">
        Tasks
      </div>
    <AlertDialogDemo/>
    </div>
    </>
  )
}

export default Task
