import { Task } from "./ReportContent";

interface DetailsProps {
  task: Task;
}

export const Details = ({ task }: DetailsProps) => {
  return (
    <div className="border-b flex flex-row space-x-28 py-3">
      <p className="w-24"> {new Date(task.date).toLocaleString()}</p>
      <h3 className="text-lg w-10">{task.task}</h3>
      <p className="w-16">{task.total_minutes}</p>
    </div>
  );
};
