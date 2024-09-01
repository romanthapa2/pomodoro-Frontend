import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReportContent = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex justify-evenly items-center">
        <TabsTrigger value="Summery" className="w-1/2">Summery</TabsTrigger>
        <TabsTrigger value="Details" className="w-1/2">Details</TabsTrigger>
      </TabsList>
      <TabsContent value="Summery">Make changes to your account here.</TabsContent>
      <TabsContent value="Details">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default ReportContent;
