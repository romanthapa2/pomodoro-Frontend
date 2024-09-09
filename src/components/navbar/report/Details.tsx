
import {Task} from "./ReportContent"

interface DetailsProps {
task: Task;
  }

export const  Details= ({ task }: DetailsProps) => {
    return (
        <div className="p-4 border-b">
        <h3 className="text-lg font-bold">{task.task}</h3>
        <p>Total Minutes: {task.total_minutes}</p>
        <p>Date: {new Date(task.date).toLocaleString()}</p>
      </div>
    );
}