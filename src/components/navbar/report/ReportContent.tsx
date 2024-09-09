import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import fetchTask from "./fetchTaSK";
import { Details } from "./Details";

export interface Task {
  _id: string;
  user: string;
  task: string;
  total_minutes: number;
  date: string;
  __v: number;
}


const ReportContent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const handleDetailsClick = async () => {
    if (!isDataFetched) {
      const response = await fetchTask();
      if (response && response.success) {
        setTasks(response.data.tasks);
        setIsDataFetched(true); 
      }
    }
  };

  return (
    <Tabs defaultValue="Summery" className="w-full" >
      <TabsList className="flex justify-evenly items-center">
        <TabsTrigger value="Summery" className="w-1/2">Summery</TabsTrigger>
        <TabsTrigger value="Details" className="w-1/2"  onClick={handleDetailsClick}>Details</TabsTrigger>
      </TabsList>
      <TabsContent value="Summery">

      </TabsContent>
      <TabsContent value="Details" >
      {tasks.length > 0 ? (
          tasks.map((task) => <Details  task={task} key={task._id}  />)
        ) : (
          <p>No tasks available</p>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ReportContent;
