
interface Task{
  text: string;
  no: number;
}

interface taskCardProp{
  task:Task
}

const TaskCard:React.FC<taskCardProp> = ({task}) => {
  return (
    <div >
      <h3>
          {task.text}
      </h3>

      <h3>
        {}
      </h3>
    </div>
  )
}

export default TaskCard